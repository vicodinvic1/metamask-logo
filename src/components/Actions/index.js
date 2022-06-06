import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonAction from 'components/Button/Action'
import ButtonIcon from 'components/Button/Icon'

import CrossIcon from 'icons/Cross'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Actions (props) {
  const { actions, className, onReset, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      {actions.map(({ disabled, label, onClick, icon }, i) => (
        <ButtonAction
          key={i}
          onClick={onClick}
          icon={icon}
          disabled={disabled}
        >
          {label}
        </ButtonAction>
      ))}

      <ButtonIcon className={classes.resetButton} onClick={onReset}>
        <CrossIcon color='secondary.pale' />
      </ButtonIcon>
    </div>
  )
}

Actions.propTypes = {
  actions: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired
}

export default React.memo(Actions)
