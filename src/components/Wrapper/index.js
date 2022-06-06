import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Box from 'components/Box'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SUCCESS_VARIANT = 'success'
const WARN_VARIANT = 'warn'
const DANGER_VARIANT = 'danger'
const VARIANTS = [SUCCESS_VARIANT, WARN_VARIANT, DANGER_VARIANT]

const ALIGN_LEFT = 'left'
const ALIGN_CENTER = 'center'
const ALIGNS = [ALIGN_LEFT, ALIGN_CENTER]

const SMALL_SIZE = 'small'
const MEDIUM_SIZE = 'medium'
const SIZES = [SMALL_SIZE, MEDIUM_SIZE]

function Wrapper (props) {
  const {
    align,
    className,
    children,
    variant,
    size,
    ...restProps
  } = props

  const CENTER_ALIGN = align === ALIGN_CENTER

  const classes = useClasses(styles, CENTER_ALIGN)

  const rootClassName = cx(
    classes.root,
    classes[size],
    classes[variant],
    className
  )

  return (
    <Box className={rootClassName} {...restProps}>
      {children}
    </Box>
  )
}

Wrapper.propTypes = {
  align: PropTypes.oneOf(ALIGNS),
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES)
}

Wrapper.defaultProps = {
  align: ALIGN_CENTER,
  variant: WARN_VARIANT,
  size: MEDIUM_SIZE
}

export default Wrapper
