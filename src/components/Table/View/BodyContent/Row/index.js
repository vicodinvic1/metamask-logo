import React from 'react'
import { cx } from '@emotion/css'

import ButtonIcon from 'components/Button/Icon'
import Checkbox from 'components/Checkbox'
import TableRow from 'components/Table/Row'
import TableCell from 'components/Table/Cell'

import DotsHorizontalIcon from 'icons/DotsHorizontal'

import useClasses from 'hooks/useClasses'

import styles from './styles'
import Cell from './Cell'

function TableBodyContentRow (props) {
  const {
    columns,
    currentItem,
    currentSort,
    getActions,
    idKey,
    isSelectable,
    item,
    itemId,
    onCheckboxClick,
    onClick,
    onMenuOpen,
    postLoading,
    rowColorCreator,
    selected,
    sort,
    withStaticColumns
  } = props

  const classes = useClasses(styles, getActions)

  const rootClassName = cx(
    selected && classes.selected,
    onClick && classes.clickable
  )

  const backgroundColor = rowColorCreator && rowColorCreator(item)

  const renderLastCellChildren = () => {
    if (getActions) {
      const actions = getActions(item)

      if (actions?.length) {
        if (actions.length === 1) {
          const { icon, onClick, danger, ...restProps } = actions[0]
          const actionClassName = cx(
            classes.action,
            danger && classes.dangerAction
          )

          return (
            <ButtonIcon
              className={actionClassName}
              onClick={createItemClickHandler(item, onClick)}
              {...restProps}
            >
              {icon}
            </ButtonIcon>
          )
        }

        return (
          <ButtonIcon
            className={classes.actionButton}
            onClick={onMenuOpen(item)}
          >
            <DotsHorizontalIcon
              color={currentItem?.[idKey] === itemId
                ? 'primary.main'
                : 'secondary.pale'}
            />
          </ButtonIcon>
        )
      }
    }
  }

  return (
    <TableRow
      className={rootClassName}
      onClick={onClick && onClick(item)}
    >
      {isSelectable && (
        <TableCell
          padding='checkbox'
          onClick={onCheckboxClick(itemId)}
          style={{ backgroundColor }}
        >
          <Checkbox
            className={classes.checkbox}
            checked={selected}
          />
        </TableCell>
      )}

      {columns.map((column, columnIndex) => {
        return (
          <Cell
            classes={classes}
            column={column}
            columnIndex={columnIndex}
            item={item}
            sort={sort}
            currentSort={currentSort}
            key={columnIndex}
            isSelectable={isSelectable}
            withStaticColumns={withStaticColumns}
            postLoading={postLoading}
            backgroundColor={backgroundColor}
          />
        )
      })}

      <TableCell
        align='right'
        className={classes.actionsCell}
        style={{ backgroundColor }}
      >
        {renderLastCellChildren()}
      </TableCell>
    </TableRow>
  )
}

function createItemClickHandler (item, onClick) {
  return (e) => {
    e.stopPropagation()
    onClick && onClick(item)
  }
}

export default TableBodyContentRow
