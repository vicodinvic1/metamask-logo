import React from 'react'
import { cx } from '@emotion/css'

import TableCell from 'components/Table/Cell'
import TableRow from 'components/Table/Row'
import Skeleton from 'components/Skeleton'

import { createArrayFromLength } from 'lib/array'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TableViewSkeleton (props) {
  const { columns, isSelectable, count } = props

  const classes = useClasses(styles)

  const skeletons = React.useMemo(
    () => createArrayFromLength(count),
    []
  )

  const renderCellSkeleton = React.useCallback(
    (column) => {
      return column.icon
        ? (
          <Skeleton
            className={classes.circle}
            variant='circular'
            width={column.iconSize}
            height={column.iconSize}
          />
          )
        : <Skeleton className={classes.rect} variant='rectangular' />
    },
    []
  )

  if (!columns.length) {
    return null
  }

  return skeletons.map((_, itemIndex) => (
    <TableRow key={itemIndex}>
      {isSelectable && (
        <TableCell padding='checkbox'>
          <div className={classes.checkboxContainer}>
            <Skeleton className={classes.checkbox} variant='rectangular' />
          </div>
        </TableCell>
      )}

      {columns.map((column, columnIndex) => {
        return (
          <TableCell
            className={cx(!isSelectable && classes.extraIndent)}
            key={columnIndex}
            width={column.width}
          >
            {renderCellSkeleton(column)}
          </TableCell>
        )
      })}

      <TableCell align='right' width='40' />
    </TableRow>
  ))
}

export default React.memo(TableViewSkeleton)
