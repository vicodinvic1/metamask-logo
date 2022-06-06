import React from 'react'
import PropTypes from 'prop-types'
import uniqBy from 'lodash/uniqBy'

import { providerHandlers as providerHandlersAtom } from 'constants/atoms'

import useDispatch from 'hooks/useDispatch'
import useSetRecoilState from 'hooks/useSetRecoilState'
import usePromise from 'hooks/usePromise'

import { CollectionHandlersContext, CollectionStateContext } from './context'

const actionTypes = {
  COLLECTION_FETCH_FAILURE: 'COLLECTION_FETCH_FAILURE',
  COLLECTION_FETCH_REQUEST: 'COLLECTION_FETCH_REQUEST',
  COLLECTION_FETCH_SUCCESS: 'COLLECTION_FETCH_SUCCESS',
  SET_PAGE: 'SET_PAGE'
}

function stateReducer (state, action) {
  switch (action.type) {
    case actionTypes.COLLECTION_FETCH_REQUEST:
      return {
        ...state,
        collection: action.payload.refetchFromStart
          ? []
          : state.collection,
        meta: {
          ...state.meta,
          loading: true
        }
      }

    case actionTypes.COLLECTION_FETCH_SUCCESS:
      return {
        ...state,
        collection: action.payload.response.data.pageProperties
          ? uniqBy(
              [
                ...state.collection,
                ...action.payload.response.data.content
              ],
              action.payload.input.idKey
            )
          : action.payload.response.data.content,
        meta: {
          ...state.meta,
          ...(action.payload.response.data.pageProperties || {}),
          loading: false
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

    default:
      throw new Error('Unknown action type')
  }
}

function SimpleCollectionProvider (props) {
  const {
    action: fetchCollectionAction,
    children,
    createIdKey,
    idKey,
    initialVariables = {},
    name,
    refetchFromStart
  } = props

  const dispatch = useDispatch()
  const mounted = usePromise()

  const [page, setPage] = React.useState(0)
  const setProviderHandlers = useSetRecoilState(providerHandlersAtom)

  const initialState = React.useMemo(
    () => ({
      collection: [],
      meta: {},
      variables: {
        ...initialVariables,
        page
      }
    }),
    []
  )

  const [state, dispatchState] = React.useReducer(stateReducer, initialState)

  const handleCollectionFetch = React.useCallback(
    async variables => {
      dispatchState({
        type: actionTypes.COLLECTION_FETCH_REQUEST,
        payload: { refetchFromStart: variables.refetchFromStart }
      })

      await mounted(dispatch(fetchCollectionAction(variables)))
        .then((action) => {
          const collection = action.payload.data.pageProperties
            ? action.payload.data.content
            : action.payload.data

          dispatchState({
            type: actionTypes.COLLECTION_FETCH_SUCCESS,
            payload: {
              response: {
                data: {
                  ...action.payload.data,
                  content: createIdKey
                    ? collection.map(item => ({
                        ...item,
                        id: createIdKey(item)
                      }))
                    : collection
                }
              },
              input: { idKey }
            },
            meta: action.meta
          })
        })
        .catch((error) => {
          dispatchState({
            type: actionTypes.COLLECTION_FETCH_FAILURE,
            payload: error
          })
        })
    },
    []
  )

  const handleCollectionRefetch = React.useCallback(
    () => {
      if (refetchFromStart) {
        setPage(0)
        dispatchState({
          type: actionTypes.SET_PAGE,
          payload: 0
        })
      }

      handleCollectionFetch({ ...state.variables, refetchFromStart })
    },
    [state.variables]
  )

  const handleNextPageFetch = React.useCallback(
    () => {
      if (!state.meta.last) {
        setPage(state.meta.number + 1)
      }
    },
    [state.meta.number, state.meta.last]
  )

  const handlePreviousPageFetch = React.useCallback(
    page => {
      if (!state.meta.first) {
        setPage(page - 1)
      }
    },
    [state.meta.first]
  )

  const handlers = React.useMemo(() => ({
    handleNextPageFetch,
    handlePreviousPageFetch,
    handleCollectionFetch,
    handleCollectionRefetch
  }), [
    handleNextPageFetch,
    handlePreviousPageFetch,
    handleCollectionFetch,
    handleCollectionRefetch
  ])

  React.useEffect(() => {
    handleCollectionFetch(state.variables)
  }, [state.variables.page])

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
      setProviderHandlers({ [name]: handlers })

      return () => { setProviderHandlers({ [name]: undefined }) }
    }
  }, [])

  return (
    <CollectionStateContext.Provider value={state}>
      <CollectionHandlersContext.Provider value={handlers}>
        {children(state)}
      </CollectionHandlersContext.Provider>
    </CollectionStateContext.Provider>
  )
}

SimpleCollectionProvider.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  refetchFromStart: PropTypes.bool,
  name: PropTypes.string
}

SimpleCollectionProvider.defaultProps = {
  idKey: 'id',
  refetchFromStart: false
}

export default React.memo(SimpleCollectionProvider)
