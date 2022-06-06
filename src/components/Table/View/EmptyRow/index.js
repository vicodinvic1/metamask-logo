import React from 'react'

import TableRow from 'components/Table/Row'
import TableCell from 'components/Table/Cell'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TableViewEmptyRow (props) {
  const { isSelectable, columnsLength, children } = props

  const classes = useClasses(styles)

  const colSpan = isSelectable ? 2 : 1

  return (
    <TableRow className={classes.root}>
      <TableCell
        className={classes.cell}
        colSpan={columnsLength + colSpan}
      >
        {children}
      </TableCell>
    </TableRow>
  )
}

export default React.memo(TableViewEmptyRow)
