import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import MUIPopper from '@mui/material/Popper'

import HoverWrapper from 'components/HoverWrapper'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Popper (props) {
  const {
    autoWidth,
    children,
    className,
    offsetX,
    offsetY,
    onMouseEnter,
    onMouseLeave,
    onTitleClick,
    placement,
    popperOptions,
    title,
    titleClassName,
    withArrow,
    ...restProps
  } = props

  const classes = useClasses(styles, autoWidth)

  const childrenClassName = cx(
    classes.children,
    className
  )

  const arrowClassName = cx(
    classes[`${placement}Arrow`]
  )

  const innerArrowClassName = cx(
    classes[`${placement}InnerArrow`]
  )

  const titleClasses = cx(
    classes.title,
    titleClassName
  )

  const arrowRef = React.useRef()

  const rootClassName = cx(
    classes.root,
    classes[placement],
    className
  )

  const modifiers = [
    {
      name: 'offset',
      options: { offset: [offsetY, offsetX] }
    },
    withArrow && {
      name: 'arrow',
      options: {
        element: arrowRef.current
      }
    }
  ].filter(Boolean)

  return (
    <HoverWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={titleClasses} onClick={onTitleClick}>
        {title}
      </div>

      <MUIPopper
        className={rootClassName}
        popperOptions={{ ...popperOptions, modifiers }}
        {...restProps}
        placement={placement}
      >
        <div className={childrenClassName}>
          {children}
        </div>

        {withArrow && (
          <div ref={arrowRef} className={arrowClassName}>
            <div className={innerArrowClassName} />
          </div>
        )}
      </MUIPopper>
    </HoverWrapper>
  )
}

Popper.propTypes = {
  autoWidth: PropTypes.bool,
  popperOptions: PropTypes.object,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  withArrow: PropTypes.bool
}

Popper.defaulProps = {
  autoWidth: false,
  popperOptions: {},
  withArrow: false
}

export default Popper
