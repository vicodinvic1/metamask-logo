import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import ButtonIcon from 'components/Button/Icon'

import CopyIcon from 'icons/Copy'

import { PLACEHOLDER } from 'constants/string'

import { notifySuccess } from 'actions/notification'

import useClasses from 'hooks/useClasses'
import useDispatch from 'hooks/useDispatch'

import styles from './styles'
function InputView (props) {
  const {
    children,
    className,
    copySuccessMessage,
    disabled,
    fullWidth,
    helperText,
    label,
    maxWidth,
    multiline,
    scrollable,
    style,
    type,
    value,
    valueAsChildren,
    withCopy,
    withFloatingLabel,
    ...restProps
  } = props

  const dispatch = useDispatch()

  const [transition, setTransition] = React.useState(false)

  const classes = useClasses(styles)

  const rootClassName = cx(
    fullWidth && classes.fullWidth,
    className
  )

  const wrapperClassName = cx(
    classes.wrapper,
    withFloatingLabel && classes.floatingWrapper,
    scrollable && classes.scrollableWrapper
  )

  const labelClasses = cx(
    classes.label,
    withFloatingLabel && classes.floatingLabel
  )

  const inputClassName = cx(
    classes.input,
    multiline && classes.multiline,
    disabled && classes.disabledInput,
    withCopy && classes.inputWithCopy,
    transition && classes.inputTransition,
    scrollable && classes.scrollableInput
  )

  const InputComponent = React.useMemo(
    () => multiline
      ? 'textarea'
      : 'input',
    []
  )

  const handleCopyButtonClick = React.useCallback(
    () => {
      setTransition(true)
      navigator.clipboard.writeText(value)
      dispatch(notifySuccess(copySuccessMessage))
    },
    [value]
  )

  const handleTransitionEnd = React.useCallback(
    () => setTransition(false),
    []
  )

  const InputProps = {
    className: inputClassName,
    value: value || PLACEHOLDER,
    readOnly: true,
    type
  }

  if (withCopy) {
    InputProps.onTransitionEnd = handleTransitionEnd
  }

  const _valueAsChildren = typeof valueAsChildren === 'function'
    ? valueAsChildren()
    : valueAsChildren

  return (
    <>
      <div
        className={rootClassName}
        {...restProps}
        style={{ maxWidth, ...style }}
      >
        {label && (
          <div className={labelClasses}>
            {label}
          </div>
        )}

        <div className={wrapperClassName}>
          {valueAsChildren
            ? (
              <div className={inputClassName}>
                {_valueAsChildren}
              </div>
              )
            : <InputComponent {...InputProps} />}

          {children}

          {withCopy && (
            <ButtonIcon
              className={classes.copyButton}
              onClick={handleCopyButtonClick}
            >
              <CopyIcon />
            </ButtonIcon>
          )}
        </div>

        {helperText && (
          <div className={classes.helperText}>
            {helperText}
          </div>
        )}
      </div>
    </>
  )
}

InputView.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  valueAsChildren: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  withCopy: PropTypes.bool,
  withFloatingLabel: PropTypes.bool
}

InputView.defaultProps = {
  disabled: false,
  fullWidth: true,
  type: 'text',
  withCopy: false,
  withFloatingLabel: false
}

export default InputView
