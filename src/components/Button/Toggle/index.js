import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Button from 'components/Button'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SMALL_SIZE = 'small'
const MEDIUM_SIZE = 'medium'
const SIZES = [SMALL_SIZE, MEDIUM_SIZE]

function ToggleButton (props) {
  const { className, children, primary, size, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes[size],
    className
  )

  return (
    <Button
      className={rootClassName}
      variant={primary ? 'contained' : 'outlined'}
      {...restProps}
    >
      {children}
    </Button>
  )
}

ToggleButton.propTypes = {
  size: PropTypes.oneOf(SIZES)
}

ToggleButton.defaultProps = {
  size: SMALL_SIZE
}

export default ToggleButton
