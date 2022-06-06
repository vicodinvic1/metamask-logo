import React from 'react'
import PropTypes from 'prop-types'

import ButtonText from 'components/Button/Text'
import Popover from 'components/Popover'

import ArrowDown from 'icons/ArrowDown'

import useClasses from 'hooks/useClasses'
import useCurrentTarget from 'hooks/useCurrentTarget'

import styles from './styles'

function ButtonSelect (props) {
  const {
    children,
    childrenClassName,
    className,
    icon: Icon,
    label,
    closeOnChildrenClick,
    popoverProps,
    popoverPaperProps,
    ...restProps
  } = props

  const [anchorEl, setAnchorEl, resetAnchorEl] = useCurrentTarget()

  const classes = useClasses(styles, anchorEl)

  const handleChildrenClick = React.useCallback(
    () => closeOnChildrenClick && resetAnchorEl(),
    []
  )

  return (
    <div className={className}>
      <ButtonText
        className={classes.button}
        onClick={setAnchorEl}
        icon={<ArrowDown className={classes.icon} />}
        {...restProps}
      >
        {label}
      </ButtonText>

      <Popover
        anchorEl={anchorEl}
        className={classes.popover}
        onClose={resetAnchorEl}
        open={!!anchorEl}
        PaperProps={popoverPaperProps}
        {...popoverProps}
      >
        <div
          className={childrenClassName}
          onClick={handleChildrenClick}
        >
          {children}
        </div>
      </Popover>
    </div>
  )
}

ButtonSelect.propTypes = {
  label: PropTypes.string.isRequired,
  closeOnChildrenClick: PropTypes.bool
}

ButtonSelect.defaultProps = {
  closeOnChildrenClick: true
}

export default ButtonSelect
