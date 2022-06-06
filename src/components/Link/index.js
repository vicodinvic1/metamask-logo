import React from 'react'
import { cx } from '@emotion/css'
import { createLocation, createPath } from 'history'
import { Link as RouterLink } from 'react-router-dom'

import useClasses from 'hooks/useClasses'
import useRouter from 'hooks/useRouter'

import styles from './styles'

function Link (props, ref) {
  const { className, to, href, primaryStyle, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    primaryStyle && classes.primaryStyle,
    className
  )

  const currentLocation = useRouter().location

  const Component = to ? RouterLink : 'a'
  const ComponentProps = {
    className: rootClassName,
    ...restProps
  }

  if (to) {
    const toLocation = typeof to === 'string'
      ? createLocation(to, null, null, currentLocation)
      : to

    ComponentProps.to = to
    ComponentProps.replace = createPath(currentLocation) === createPath(toLocation)
  }

  if (href) {
    ComponentProps.href = href
    ComponentProps.target = '_blank'
    ComponentProps.rel = 'noopener noreferrer'
  }

  return <Component {...ComponentProps} ref={ref} />
}

export default React.forwardRef(Link)
