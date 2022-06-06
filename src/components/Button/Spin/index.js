import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Button from 'components/Button'

import ArrowsSyncIcon from 'icons/ArrowsSync'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SPIN_DEGREE = 180

function SpinButton (props) {
  const {
    children,
    className,
    Icon,
    iconClassName,
    onClick,
    spinOnMount,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const [spin, setSpin] = React.useState(0)

  const rootClassName = cx(
    classes.root,
    className
  )

  const iconClasses = cx(
    classes.icon,
    iconClassName
  )

  const handleSpin = React.useCallback(
    () => setSpin(spin => spin + SPIN_DEGREE),
    []
  )

  const handleClick = React.useCallback(
    () => {
      handleSpin()
      onClick()
    },
    [onClick]
  )

  React.useEffect(() => {
    if (spinOnMount) {
      handleSpin()
    }
  }, [])

  return (
    <Button
      className={rootClassName}
      onClick={handleClick}
      {...restProps}
    >
      <span>
        {children}
      </span>

      <Icon
        className={iconClasses}
        style={{ transform: `rotate(${spin}deg)` }}
      />
    </Button>
  )
}

SpinButton.propTypes = {
  Icon: PropTypes.elementType,
  spinOnMount: PropTypes.bool
}

SpinButton.defaultProps = {
  Icon: ArrowsSyncIcon,
  spinOnMount: true
}

export default SpinButton
