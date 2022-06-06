import React from 'react'
import { cx } from '@emotion/css'

import CheckIcon from 'icons/Check'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function StepIcon (props) {
  const { active, completed, children, className, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    active && classes.active,
    completed && classes.completed,
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      {completed
        ? <CheckIcon />
        : children}
    </div>
  )
}

export default StepIcon
