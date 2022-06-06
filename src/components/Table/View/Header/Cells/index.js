import React from 'react'

import { CollectionHandlersContext } from 'components/Collection/context'
import TableCell from 'components/Table/Cell'
import TableSortLabel from 'components/Table/SortLabel'

import TableSortArrowIcon from 'icons/TableSortArrow'

const SORT_ORDER_ASC = 'asc'
const SORT_ORDER_DESC = 'desc'

function TableHeaderCells (props) {
  const { cellClassName, sort, top, visibleColumns } = props

  const { handleSortChange } = React.useContext(CollectionHandlersContext)

  const createSortChangeHandler = sortBy => () => {
    let sortOrder = sort.order

    if (sort.by === sortBy) {
      sortOrder = sort.order === SORT_ORDER_ASC
        ? SORT_ORDER_DESC
        : SORT_ORDER_ASC
    }

    handleSortChange({
      by: sortBy,
      order: sortOrder
    })
  }

  return visibleColumns.map((column, index) => {
    return (
      <TableCell
        align={column.align}
        className={cellClassName}
        key={index}
        sortDirection={sort && column.sortBy === sort.by ? sort.order : false}
        style={{ ...column.style, top }}
        width={column.width}
      >
        {column.sortBy
          ? (
            <TableSortLabel
              active={column.sortBy === sort.by}
              direction={sort.order}
              onClick={createSortChangeHandler(column.sortBy)}
              IconComponent={TableSortArrowIcon}
            >
              {column.label || column.name}
            </TableSortLabel>
            )
          : !column.noHeaderLabel && (column.label || column.name)}
      </TableCell>
    )
  })
}

export default React.memo(TableHeaderCells)
