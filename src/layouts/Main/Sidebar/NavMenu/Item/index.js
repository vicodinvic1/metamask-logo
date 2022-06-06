import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonBase from 'components/Button/Base'
import Popper from 'components/Popper'

import useClasses from 'hooks/useClasses'
import useTheme from 'hooks/useTheme'
import useCurrentTarget from 'hooks/useCurrentTarget'

import styles from './styles'

function MainLayoutNavMenuItem (props) {
  const {
    className,
    dense,
    Icon,
    item,
    match,
    primaryLabel,
    primaryLabelClassName,
    route,
    secondaryLabel,
    secondaryLabelClassName,
    startAdornment,
    startAdornmentClassName,
    ...restProps
  } = props

  const classes = useClasses(styles, { dense, match })

  const { palette } = useTheme()

  const [anchorEl, setAnchorEl, resetAnchorEl] = useCurrentTarget()

  const primary = palette.primary.main
  const secondary = palette.secondary.disabled
  const withTooltip = dense && route

  const rootClassName = cx(
    classes.root,
    !match && classes.withHover,
    className
  )

  const primaryLabelClasses = cx(
    classes.primaryLabel,
    secondaryLabel && classes.profileLabel,
    primaryLabelClassName
  )

  const secondaryLabelClasses = cx(
    classes.secondaryLabel,
    secondaryLabelClassName
  )

  const renderStartAdornment = () => {
    const startAdornmentContent = Icon
      ? <Icon color={match ? primary : secondary} />
      : startAdornment

    if (withTooltip) {
      return (
        <>
          {startAdornmentContent}

          <Popper
            anchorEl={anchorEl}
            open={!!anchorEl}
            placement='right'
            offsetX={10}
          >
            {primaryLabel}
          </Popper>
        </>
      )
    }

    return startAdornmentContent
  }

  const ButtonProps = {
    className: rootClassName,
    to: route,
    ...restProps
  }

  if (withTooltip) {
    ButtonProps.onMouseEnter = setAnchorEl
    ButtonProps.onMouseLeave = resetAnchorEl
  }

  return (
    <ButtonBase {...ButtonProps}>
      <div className={cx(classes.startAdornment, startAdornmentClassName)}>
        {renderStartAdornment()}
      </div>

      <div className={classes.labelWrapper}>
        <div className={primaryLabelClasses} title={primaryLabel}>
          {primaryLabel}
        </div>

        {secondaryLabel && (
          <span className={secondaryLabelClasses}>
            {secondaryLabel}
          </span>
        )}
      </div>
    </ButtonBase>
  )
}

MainLayoutNavMenuItem.propTypes = {
  icon: PropTypes.object,
  primaryLabel: PropTypes.string.isRequired,
  route: PropTypes.string
}

export default MainLayoutNavMenuItem
