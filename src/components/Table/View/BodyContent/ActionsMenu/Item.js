import React from 'react'
import { cx } from '@emotion/css'

import Link from 'components/Link'
import ListItemIcon from 'components/List/Item/Icon'
import ListItemText from 'components/List/Item/Text'
import MenuItem from 'components/Menu/Item'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TableBodyContentMenuItem (props, ref) {
  const {
    className,
    danger,
    icon,
    label,
    primaryClassName,
    ...restProps
  } = props

  const classes = useClasses(styles)

  if (restProps.to) {
    restProps.component = Link
  }

  const itemClassName = cx(
    danger && classes.dangerItem,
    className
  )

  const primaryClasses = cx(
    classes.primary,
    danger && classes.dangerPrimaryText,
    primaryClassName
  )

  return (
    <MenuItem
      ref={ref}
      {...restProps}
      className={itemClassName}
    >
      {icon && (
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )}

      <ListItemText
        classes={{ primary: primaryClasses }}
        primary={label}
      />
    </MenuItem>
  )
}

export default React.forwardRef(TableBodyContentMenuItem)
