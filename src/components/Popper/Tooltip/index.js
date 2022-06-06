import React from 'react'
import { cx } from '@emotion/css'

import Popper from 'components/Popper'

import useCurrentTarget from 'hooks/useCurrentTarget'
import useClasses from 'hooks/useClasses'

import styles from './styles'

function PooperTooltip (props) {
  const { children, titleClassName, ...restProps } = props

  const classes = useClasses(styles)

  const [
    anchorEl,
    setAnchorEl,
    resetAnchorEl,
    toggleAnchorEl
  ] = useCurrentTarget()

  const titleClasses = cx(
    classes.title,
    titleClassName
  )

  return (
    <Popper
      {...restProps}
      open={!!anchorEl}
      anchorEl={anchorEl}
      onMouseEnter={setAnchorEl}
      onMouseLeave={resetAnchorEl}
      onTitleClick={toggleAnchorEl}
      titleClassName={titleClasses}
    >
      {children}
    </Popper>
  )
}

export default PooperTooltip
