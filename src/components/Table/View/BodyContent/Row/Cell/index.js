import React from 'react'
import { cx } from '@emotion/css'

import Skeleton from 'components/Skeleton'
import TableCell from 'components/Table/Cell'

import { PLACEHOLDER } from 'constants/string'

import { getColumnValue } from 'lib/column'

import useTheme from 'hooks/useTheme'

function TableViewBodyContentCell (props) {
  const {
    backgroundColor,
    classes,
    column,
    columnIndex,
    currentSort,
    isSelectable,
    item,
    postLoading,
    sort,
    withStaticColumns
  } = props
  const { sortBy } = column

  const { palette } = useTheme()

  const sortMatch = typeof sortBy !== 'undefined' &&
    (currentSort === sortBy || sort?.by === sortBy)
  const color = sortMatch && palette.secondary.main

  const rootClassName = cx(
    !isSelectable && classes.firstExtraIndent,
    withStaticColumns && classes.lastExtraIndent
  )

  const renderValue = () => {
    const value = getColumnValue('value')(column, item) || PLACEHOLDER

    if (column.withPostLoading) {
      return postLoading
        ? renderSkeleton(column)
        : value
    }

    return value
  }

  return (
    <TableCell
      align={column.align}
      className={rootClassName}
      key={columnIndex}
      width={column.width}
      style={{
        backgroundColor,
        color
      }}
    >
      {renderValue()}
    </TableCell>
  )
}

function renderSkeleton (column) {
  if (column.icon) {
    return (
      <Skeleton
        variant='circular'
        width={18}
        height={18}
      />
    )
  }

  return (
    <Skeleton
      variant='rectangular'
      width={80}
      height={23}
      sx={{ borderRadius: 1 }}
    />
  )
}

export default React.memo(TableViewBodyContentCell)
