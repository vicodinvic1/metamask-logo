import React from 'react'

import Menu from 'components/Menu'

import useClasses from 'hooks/useClasses'

import styles from './styles'
import MenuItem from './Item'

function TableBodyContentActionsMenu (props) {
  const {
    currentItem,
    onItemClick,
    getActions,
    menuAnchorEl,
    ...restProps
  } = props

  const classes = useClasses(styles)

  return (
    <Menu
      classes={{ list: classes.root }}
      open={!!(menuAnchorEl && currentItem)}
      anchorEl={menuAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{ elevation: 2 }}
      disableScrollLock
      {...restProps}
    >
      {currentItem && getActions(currentItem).map(
        (item, i) => {
          const { onClick, ...restProps } = item

          return (
            <MenuItem
              {...restProps}
              key={i}
              onClick={onItemClick(item.onClick)}
            />
          )
        }
      )}
    </Menu>
  )
}

export default TableBodyContentActionsMenu
