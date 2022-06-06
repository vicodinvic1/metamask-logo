import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import MUIInput from '@mui/material/Input'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const PRIMARY_COLOR = 'primary'
const SECONDARY_COLOR = 'secondary'
const COLORS = [PRIMARY_COLOR, SECONDARY_COLOR]

function Input (props) {
  const {
    className,
    color,
    withShadow,
    withValue,
    value,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    classes[color],
    withValue && value && classes.withValue,
    withShadow && classes.withShadow,
    className
  )

  return (
    <MUIInput
      className={rootClassName}
      {...restProps}
      value={value}
      disableUnderline
    />
  )
}

Input.propTypes = {
  color: PropTypes.oneOf(COLORS),
  withShadow: PropTypes.bool,
  withValue: PropTypes.bool
}

Input.defaultProps = {
  color: PRIMARY_COLOR,
  withValue: true,
  withShadow: true
}

export default Input
