import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonBase from 'components/Button/Base'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SMALL_SIZE = 'small'
const MEDIUM_SIZE = 'medium'
const SIZES = [SMALL_SIZE, MEDIUM_SIZE]
const PLACEHOLDER = 'Unknown'

function Chip (props) {
  const { className, children, onClick, label, size, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    onClick && classes.withClick,
    classes[size],
    children && classes.withChildren,
    className
  )

  const Component = onClick ? ButtonBase : 'div'

  return (
    <Component className={rootClassName} onClick={onClick} {...restProps}>
      {label || PLACEHOLDER}

      {children && (
        <div className={classes.children}>
          {children}
        </div>
      )}
    </Component>
  )
}

Chip.propTypes = {
  state: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
}

Chip.defaultProps = {
  size: SMALL_SIZE
}

export default Chip
