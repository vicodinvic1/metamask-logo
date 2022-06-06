import React from 'react'

import TableBodyContentRow from './Row'
import ActionsMenu from './ActionsMenu'

function TableBodyContent (props) {
  const {
    collection,
    columns,
    currentSort,
    getActions,
    idKey,
    indexIsAKey,
    isSelectable,
    isSelectedItemChecker,
    onCheckboxClick,
    onRowClick,
    postLoading,
    rowColorCreator,
    sort,
    withStaticColumns
  } = props

  const [currentItem, setCurrentItem] = React.useState(null)
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)

  const handleItemClick = React.useCallback(
    item => e => {
      window.getSelection().toString() === ''
        ? onRowClick && onRowClick(item)
        : e.preventDefault()
    },
    []
  )

  const handleItemMenuClose = React.useCallback(
    () => {
      setCurrentItem(null)
      setMenuAnchorEl(null)
    },
    []
  )

  const createItemMenuOpenHandler = React.useCallback(
    item => e => {
      e.stopPropagation()
      setCurrentItem(item)
      setMenuAnchorEl(e.currentTarget)
    },
    []
  )

  const createMenuItemOnClickHandler = React.useCallback(
    onClick => e => {
      handleItemMenuClose()
      onClick && onClick(e)
    },
    []
  )

  const renderActions = () => {
    if (getActions) {
      const actions = currentItem && getActions(currentItem)

      if (actions?.length > 1) {
        return (
          <ActionsMenu
            getActions={getActions}
            menuAnchorEl={menuAnchorEl}
            currentItem={currentItem}
            onClose={handleItemMenuClose}
            onItemClick={createMenuItemOnClickHandler}
          />
        )
      }
    }
  }

  return (
    <>
      {collection.map((item, index) => {
        const itemId = item[idKey]
        const selected = isSelectedItemChecker(itemId)

        return (
          <TableBodyContentRow
            columns={columns}
            currentItem={currentItem}
            currentSort={currentSort}
            getActions={getActions}
            idKey={idKey}
            isSelectable={isSelectable}
            item={item}
            itemId={itemId}
            key={indexIsAKey ? index : itemId}
            onCheckboxClick={onCheckboxClick}
            onClick={onRowClick && handleItemClick}
            onMenuOpen={createItemMenuOpenHandler}
            postLoading={postLoading}
            rowColorCreator={rowColorCreator}
            selected={selected}
            sort={sort}
            withStaticColumns={withStaticColumns}
          />
        )
      })}

      {renderActions()}
    </>
  )
}

export default React.memo(TableBodyContent)
