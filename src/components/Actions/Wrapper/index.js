import React from 'react'
import { cx } from '@emotion/css'

import Actions from 'components/Actions'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ActionsWrapper (props) {
  const { actions, className, children, onReset, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      <Actions actions={actions} onReset={onReset} />

      {children}
    </div>
  )
}

export default ActionsWrapper
