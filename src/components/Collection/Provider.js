import React from 'react'
import PropTypes from 'prop-types'
import { CancelToken } from 'axios'
import isEqual from 'lodash/isEqual'
import merge from 'lodash/merge'

import useCurrentUser from 'hooks/useCurrentUser'
import useDispatch from 'hooks/useDispatch'
import useLocalStorage from 'hooks/useLocalStorage'
import usePrevious from 'hooks/usePrevious'
import useSelector from 'hooks/useSelector'
import usePromise from 'hooks/usePromise'

import { CollectionHandlersContext, CollectionStateContext } from './context'

const actionTypes = {
  ADD_IDS: 'ADD_IDS',
  COLLECTION_FETCH_FAILURE: 'COLLECTION_FETCH_FAILURE',
  COLLECTION_FETCH_REQUEST: 'COLLECTION_FETCH_REQUEST',
  COLLECTION_FETCH_SUCCESS: 'COLLECTION_FETCH_SUCCESS',
  SET_PAGE: 'SET_PAGE',
  SET_FILTER: 'SET_FILTER',
  SET_SORT: 'SET_SORT',
  SET_META: 'SET_META'
}

function stateReducer (state, action) {
  switch (action.type) {
    case actionTypes.COLLECTION_FETCH_REQUEST:
      return {
        ...state,
        meta: {
          ...state.meta,
          loading: true
        }
      }

    case actionTypes.COLLECTION_FETCH_SUCCESS:
      return {
        ...state,
        ids: action.payload.keepPrevIds
          ? [
              ...new Set([
                ...state.ids,
                ...action.payload.data.result
              ])
            ]
          : action.payload.data.result,
        meta: {
          ...state.meta,
          ...action.meta?.pageProperties,
          loading: !!action.payload.waitForOnFetchSuccess
        }
      }

    case actionTypes.COLLECTION_FETCH_FAILURE:
      return {
        ...state,
        meta: {
          ...state.meta,
          loading: false
        }
      }

    case actionTypes.SET_PAGE:
      return {
        ...state,
        variables: {
          ...state.variables,
          page: action.payload
        }
      }

    case actionTypes.SET_FILTER:
      return {
        ...state,
        variables: {
          ...state.variables,
          page: 0,
          filter: action.payload
        }
      }

    case actionTypes.SET_SORT:
      return {
        ...state,
        variables: {
          ...state.variables,
          sort: action.payload
        }
      }

    case actionTypes.SET_META: {
      return {
        ...state,
        meta: {
          ...state.meta,
          ...action.payload
        }
      }
    }

    case actionTypes.ADD_IDS:
      return {
        ...state,
        ids: [...state.ids, ...action.payload]
      }

    default:
      throw new Error('Unknown action type')
  }
}

function CollectionProvider (props) {
  const {
    action: fetchCollectionAction,
    children,
    initialVariables,
    staticVariables,
    name,
    onFetchSuccess,
    selector: createSelector,
    takeAll,
    waitForOnFetchSuccess
  } = props

  const dispatch = useDispatch()
  const mounted = usePromise()
  const currentUser = useCurrentUser()

  const [page, setPage] = React.useState(0)
  const [filterStorage, setFilterStorage] = useLocalStorage(
    `${currentUser.email}-${name}-collection-filter`
  )

  const initialState = React.useMemo(
    () => ({
      ids: [],
      meta: {},
      variables: {
        ...(initialVariables || {}),
        filter: (name && filterStorage?.filter) || initialVariables?.filter,
        page,
        sort: initialVariables?.sort
      }
    }),
    []
  )

  const [state, dispatchState] = React.useReducer(stateReducer, initialState)
  const prevFilterVariables = usePrevious(state.variables.filter)

  const selector = React.useMemo(
    () => takeAll
      ? createSelector()
      : createSelector({ ids: state.ids }),
    [state.ids]
  )

  const collection = useSelector(selector)

  let cancelSource

  const handleMetaChange = React.useCallback(
    payload => {
      dispatchState({
        type: actionTypes.SET_META,
        payload
      })
    },
    []
  )

  const handleCollectionFetch = React.useCallback(
    async variables => {
      if (cancelSource) {
        cancelSource.cancel({ canceled: true })
      }

      dispatchState({ type: actionTypes.COLLECTION_FETCH_REQUEST })

      const source = CancelToken.source()
      cancelSource = source

      const filterVariables = merge({}, variables, staticVariables)

      await mounted(dispatch(fetchCollectionAction({
        ...filterVariables,
        cancelToken: source.token
      })))
        .then((action) => {
          cancelSource = null
          dispatchState({
            type: actionTypes.COLLECTION_FETCH_SUCCESS,
            payload: {
              waitForOnFetchSuccess,
              data: action.payload,
              keepPrevIds: !variables.resetIds &&
                isEqual(variables.filter, prevFilterVariables)
            },
            meta: action.meta
          })
          onFetchSuccess && onFetchSuccess(
            action.payload,
            { handleMetaChange }
          )
        })
        .catch((error) => {
          if (!error && cancelSource) {
            return
          }

          cancelSource = null
          dispatchState({
            type: actionTypes.COLLECTION_FETCH_FAILURE,
            payload: error
          })
        })
    },
    [prevFilterVariables]
  )

  const handleCollectionRefetch = React.useCallback(
    resetIds => () => handleCollectionFetch({
      ...state.variables,
      resetIds,
      page: 0
    }),
    [state.variables]
  )

  const handleFilterChange = React.useCallback(
    variables => {
      dispatchState({
        type: actionTypes.SET_FILTER,
        payload: variables.filter
      })
      window.scrollTo(0, 0)

      page && setPage(0)
    },
    [page]
  )

  const handleSortChange = React.useCallback(
    sort => dispatchState({
      type: actionTypes.SET_SORT,
      payload: sort
    }),
    []
  )

  const handleNextPageFetch = React.useCallback(
    () => {
      if (!state.meta.last) {
        setPage(state.meta.number + 1)
      }
    },
    [state.meta.number, state.meta.last]
  )

  const handleGoToPage = React.useCallback(
    page => () => setPage(page),
    []
  )

  const handlePreviousPageFetch = React.useCallback(
    page => {
      if (!state.meta.first) {
        setPage(page - 1)
      }
    },
    [state.meta.first]
  )

  const handleAddIds = React.useCallback(
    ids => dispatchState({
      type: actionTypes.ADD_IDS,
      payload: ids
    }),
    []
  )

  const handlers = React.useMemo(() => ({
    handleAddIds,
    handleGoToPage,
    handleFilterChange,
    handleNextPageFetch,
    handlePreviousPageFetch,
    handleSortChange,
    handleCollectionFetch,
    handleMetaChange
  }), [
    handleFilterChange,
    handleNextPageFetch,
    handlePreviousPageFetch,
    handleCollectionFetch
  ])

  React.useEffect(() => {
    handleCollectionFetch(state.variables)
  }, [state.variables.filter, state.variables.sort, state.variables.page])

  React.useEffect(() => {
    if (page !== 0 && state.variables.page !== page) {
      dispatchState({
        type: actionTypes.SET_PAGE,
        payload: page
      })
    }
  }, [page])

  React.useEffect(() => {
    if (name) {
      setFilterStorage(filterStorage => ({
        ...filterStorage,
        filter: state.variables.filter
      }))
    }
  }, [state.variables.filter])

  return (
    <CollectionStateContext.Provider value={state}>
      <CollectionHandlersContext.Provider value={handlers}>
        {children({
          ...state,
          collection: collection || [],
          refetch: handleCollectionRefetch,
          addIds: handleAddIds
        })}
      </CollectionHandlersContext.Provider>
    </CollectionStateContext.Provider>
  )
}

CollectionProvider.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  name: PropTypes.string,
  selector: PropTypes.func.isRequired,
  waitForOnFetchSuccess: PropTypes.bool
}

CollectionProvider.defaultProps = {
  waitForOnFetchSuccess: false
}

export default React.memo(CollectionProvider)
