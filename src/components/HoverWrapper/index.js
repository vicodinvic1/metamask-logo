import React from 'react'
import { cx } from '@emotion/css'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function HoverWrapper (props) {
  const { children, className, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      {children}
    </div>
  )
}

export default HoverWrapper
