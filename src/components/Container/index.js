import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Container (props) {
  const {
    className,
    component,
    flex,
    fullHeight,
    fullWidth,
    inheritBg,
    maxWidth,
    minWidth,
    noPadding,
    style,
    withYPadding,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const componentProps = {
    className: cx(
      classes.root,
      inheritBg && classes.inheritBg,
      fullHeight && classes.fullHeight,
      fullWidth && classes.fullWidth,
      flex && classes.flex,
      noPadding && classes.noPadding,
      minWidth && classes.scrollX,
      withYPadding && classes.withYPadding,
      className
    ),
    style: {
      minWidth,
      maxWidth,
      ...style
    },
    ...restProps
  }

  return React.createElement(component, componentProps)
}

Container.propTypes = {
  component: PropTypes.node,
  flex: PropTypes.bool,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  inheritBg: PropTypes.bool,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  noPadding: PropTypes.bool,
  style: PropTypes.object,
  withYPadding: PropTypes.bool
}

Container.defaultProps = {
  component: 'div',
  flex: false,
  fullHeight: false,
  fullWidth: true,
  inheritBg: false,
  noPadding: true,
  withYPadding: false
}

export default Container
