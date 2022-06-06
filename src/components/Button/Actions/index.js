import React from 'react'
import PropTypes from 'prop-types'

import ButtonSelect from 'components/Button/Select'
import ListItemIcon from 'components/List/Item/Icon'
import MenuItem from 'components/Menu/Item'
import MenuList from 'components/Menu/List'
import Tooltip from 'components/Tooltip'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ActionsButton (props) {
  const { actions, ...restProps } = props

  const classes = useClasses(styles)

  const renderAction = (action, i) => {
    const { disabled, disabledReason, icon, label, ...restProps } = action

    const _icon = icon && (
      <ListItemIcon>
        {icon}
      </ListItemIcon>
    )

    if (disabled && disabledReason) {
      return (
        <Tooltip key={i} title={disabledReason}>
          <MenuItem
            className={classes.item}
            disabled={disabled}
            {...restProps}
          >
            {_icon}

            {label}
          </MenuItem>
        </Tooltip>
      )
    }

    return (
      <MenuItem
        className={classes.item}
        disabled={disabled}
        key={i}
        {...restProps}
      >
        {_icon}

        {label}
      </MenuItem>
    )
  }

  return (
    <ButtonSelect {...restProps}>
      <MenuList>
        {actions.map(renderAction)}
      </MenuList>
    </ButtonSelect>
  )
}

ActionsButton.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      to: PropTypes.string
    })
  )
}

ActionsButton.defaultProps = {
  actions: []
}

export default React.memo(ActionsButton)
