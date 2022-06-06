import React from 'react'
import PropTypes from 'prop-types'

import TableView from 'components/Table/View'

import {
  CollectionHandlersContext,
  CollectionStateContext
} from 'components/Collection/context'

import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

const SORT_ORDER_ASC = 'asc'

function CollectionTable (props) {
  const {
    changeColumnsAction: onChangeColumns,
    className,
    collection,
    columns,
    idKey,
    tableStyle,
    ...restProps
  } = props

  const dispatch = useDispatch()
  const storeColumns = useSelector(state => state.columns)

  const handlers = React.useContext(CollectionHandlersContext)

  const { meta, variables } = React.useContext(CollectionStateContext)

  const handleCurrentColumnsChange = React.useCallback(
    columns => dispatch(onChangeColumns(columns)),
    []
  )

  const sort = React.useMemo(
    () => ({
      by: columns.find(c => c.sortBy)?.sortBy,
      order: SORT_ORDER_ASC,
      ...variables.sort
    }),
    [variables.sort]
  )

  return (
    <TableView
      className={className}
      collection={collection}
      columns={columns}
      initialCurrentColumns={storeColumns}
      onCurrentColumnsChange={onChangeColumns && handleCurrentColumnsChange}
      meta={meta}
      idKey={idKey}
      onNextPageFetch={handlers.handleNextPageFetch}
      variables={variables}
      sort={sort}
      style={{ ...tableStyle }}
      {...restProps}
    />
  )
}

CollectionTable.propTypes = {
  changeColumnsAction: PropTypes.func,
  columns: PropTypes.array.isRequired
}

export default CollectionTable
