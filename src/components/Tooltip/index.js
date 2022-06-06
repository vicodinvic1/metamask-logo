import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import MUITooltip from '@mui/material/Tooltip'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const CENTER_ALIGN = 'center'
const LEFT_ALIGN = 'left'
const ALIGNS = [LEFT_ALIGN, CENTER_ALIGN]

const LARGE_SIZE = 'large'
const SIZES = [LARGE_SIZE]

function Tooltip (props) {
  const {
    align,
    arrowClassName,
    children,
    className,
    multiline,
    size,
    withHelpCursor,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const LARGE = size === LARGE_SIZE

  const rootClassName = cx(
    classes.root,
    withHelpCursor && classes.withHelpCursor,
    className
  )

  const tooltipClassName = cx(
    classes.tooltip,
    classes[align],
    LARGE && classes.largeTooltip,
    multiline && classes.multiline
  )

  const Children = React.forwardRef((props, ref) => (
    <div {...props} ref={ref}>
      {children}
    </div>
  ))

  return (
    <MUITooltip
      className={rootClassName}
      classes={{
        popper: classes.popper,
        tooltip: tooltipClassName,
        arrow: arrowClassName
      }}
      placement='bottom'
      {...restProps}
    >
      <Children />
    </MUITooltip>
  )
}

Tooltip.propTypes = {
  align: PropTypes.oneOf(ALIGNS),
  children: PropTypes.element,
  multiline: PropTypes.bool,
  secondaryChildren: PropTypes.node,
  withHelpCursor: PropTypes.bool,
  size: PropTypes.oneOf(SIZES)
}

Tooltip.defaultProps = {
  align: LEFT_ALIGN,
  enterDelay: 400,
  multiline: false,
  withHelpCursor: true
}

export default Tooltip
