import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import StateDot from 'components/State/Dot'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SUCCESS_STATE = 'success'
const WARN_STATE = 'warn'
const ERROR_STATE = 'error'
const STATES = [SUCCESS_STATE, WARN_STATE, ERROR_STATE]

const SMALL_SIZE = 'small'
const MEDIUM_SIZE = 'medium'
const SIZES = [SMALL_SIZE, MEDIUM_SIZE]

const FALLBACK_PLACEHOLDER = 'Unknown state'

function StateLabel (props) {
  const { className, state, label, size, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    classes[size],
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      <StateDot
        className={classes[`${size}-dot`]}
        size={size}
        state={state}
      />

      <div>
        {label || FALLBACK_PLACEHOLDER}
      </div>
    </div>
  )
}

StateLabel.propTypes = {
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOfType([
    PropTypes.oneOf(STATES),
    PropTypes.bool
  ])
}

StateLabel.defaultProps = {
  size: SMALL_SIZE,
  state: false
}

export default StateLabel
