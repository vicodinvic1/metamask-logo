import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonBase from 'components/Button/Base'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ActionButton (props) {
  const {
    className,
    children,
    disabled,
    icon: Icon,
    iconColor,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    disabled && classes.disabled,
    className
  )

  const RootProps = {
    className: rootClassName,
    disabled,
    ...restProps
  }

  return (
    <ButtonBase {...RootProps}>
      {Icon && <Icon color={iconColor} className={classes.icon} />}

      {children}
    </ButtonBase>
  )
}

ActionButton.propTypes = {
  iconColor: PropTypes.string
}

export default ActionButton
