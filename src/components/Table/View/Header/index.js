import React from 'react'
import { cx } from '@emotion/css'
import _intersection from 'lodash/intersection'

import Checkbox from 'components/Checkbox'
import TableCell from 'components/Table/Cell'
import TableHead from 'components/Table/Head'
import TableRow from 'components/Table/Row'

import { toolbarHeight as toolbarHeightAtom } from 'constants/atoms'

import { toggleInCollection } from 'lib/collection'

import useRecoilValue from 'hooks/useRecoilValue'
import useWindowScroll from 'hooks/useWindowScroll'
import useClasses from 'hooks/useClasses'

import styles from './styles'
import ColumnsMenu from './ColumnsMenu'
import TableHeaderCells from './Cells'

function TableViewHeader (props) {
  const {
    collectionIds,
    currentColumns,
    onCurrentColumnsChange,
    onCurrentColumnsSet,
    onSelect,
    onSelectedIdsSet,
    isSelectable,
    selectedIds,
    sort,
    stickyHeader,
    visibleColumns,
    withStaticColumns
  } = props

  const classes = useClasses(styles, stickyHeader)

  const windowScroll = useWindowScroll()
  const offsetTop = useRecoilValue(toolbarHeightAtom)

  const top = React.useMemo(
    () => stickyHeader ? Math.floor(offsetTop) : 0,
    [offsetTop]
  )

  const checkedAll = !!selectedIds.length &&
    !!collectionIds.length &&
    collectionIds.every(id => selectedIds.includes(id))

  const isSticky = React.useMemo(
    () => stickyHeader && windowScroll.y,
    [windowScroll.y]
  )

  const cellClassName = cx(
    classes.cell,
    !isSelectable && classes.firstExtraIndent,
    isSticky && classes.cellSticky
  )

  const lastCellClassName = cx(
    cellClassName,
    classes.lastCell,
    withStaticColumns && classes.lastExtraIndent
  )

  const indeterminate = React.useMemo(
    () => {
      if (selectedIds.length && collectionIds.length) {
        const intersection = _intersection(selectedIds, collectionIds).length

        return !!intersection && intersection !== collectionIds.length
      }
    },
    [collectionIds, selectedIds]
  )

  const createAllSelectHandler = React.useCallback(
    items => event => {
      onSelectedIdsSet(prevIds => {
        let nextIds

        if (prevIds.length) {
          if (collectionIds.every(id => prevIds.includes(id))) {
            nextIds = collectionIds.length === prevIds.length
              ? []
              : prevIds.filter(id => !items.includes(id))
          } else {
            nextIds = [...new Set([...prevIds, ...items])]
          }
        } else {
          nextIds = items
        }

        if (onSelect) {
          onSelect(nextIds, items)
        }

        return nextIds
      })
    },
    [collectionIds]
  )

  const handleColumnShowChange = React.useCallback(
    (column, disabled) => () => {
      if (!disabled) {
        const newColumns = toggleInCollection(currentColumns, column)
        const nextColumns = [
          ...newColumns,
          {
            ...column,
            visible: !column.visible
          }
        ].sort((a, b) => a.position - b.position)

        onCurrentColumnsSet(nextColumns)
        onCurrentColumnsChange && onCurrentColumnsChange(nextColumns)
      }
    },
    [currentColumns]
  )

  return (
    <TableHead>
      {!!visibleColumns.length && (
        <TableRow>
          {isSelectable && (
            <TableCell
              className={cellClassName}
              padding='checkbox'
              style={{ top }}
              onClick={createAllSelectHandler(collectionIds)}
            >
              <Checkbox
                className={classes.checkbox}
                checked={checkedAll}
                indeterminate={indeterminate}
                id='selectAllOnPage'
              />
            </TableCell>
          )}

          <TableHeaderCells
            classes={classes}
            cellClassName={cellClassName}
            top={top}
            sort={sort}
            visibleColumns={visibleColumns}
          />

          <TableCell
            align='right'
            className={lastCellClassName}
            style={{ top, paddingRight: 10 }}
          >
            <ColumnsMenu
              currentColumns={currentColumns}
              onColumnShowChange={handleColumnShowChange}
              show={!withStaticColumns}
              visibleColumnsCount={visibleColumns.length}
            />
          </TableCell>
        </TableRow>
      )}
    </TableHead>
  )
}

export default React.memo(TableViewHeader)
