import React from 'react'
import { cx } from '@emotion/css'

import ButtonIcon from 'components/Button/Icon'
import FormControl from 'components/Form/Control'
import FormHelperText from 'components/Form/HelperText'
import Input from 'components/Form/Input'
import FilledInput from 'components/Form/FilledInput'
import Label from 'components/Form/Label'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const LARGE_SIZE = 'large'
const MEDIUM_SIZE = 'medium'

const NO_VALUE = 'N/A'

function TextField (props, ref) {
  const {
    asAutocompleteField,
    children,
    className,
    endAdornment,
    fullWidth = true,
    helperText,
    input,
    inputClassName,
    label,
    labelClassName,
    margin = 'dense',
    meta,
    multiline,
    readOnly,
    required,
    shrink,
    size = MEDIUM_SIZE,
    value,
    variant = 'filled',
    withNoValueButton,
    withBackground,
    isValue,
    ...restProps
  } = props

  const _value = asAutocompleteField
    ? value
    : input.value

  const classes = useClasses(styles)

  const largeSize = size === LARGE_SIZE
  const STANDARD_VARIANT = variant === 'standard'
  const FILLED_VARIANT = variant === 'filled'

  const InputProps = {
    ...input,
    multiline,
    readOnly,
    error: !!(meta.touched && meta.error),
    fullWidth,
    id: input.name,
    notched: shrink,
    endAdornment,
    disableUnderline: withBackground || !STANDARD_VARIANT,
    value: _value,
    ...restProps
  }

  const { disabled, error } = InputProps
  const valid = (_value?.toString() || isValue) && !meta.error

  const handleSetNoValue = () => {
    if (input.value !== NO_VALUE) {
      return input.onChange('N/A')
    }
  }

  const rootClassName = cx(
    classes.root,
    disabled && classes.disabled,
    withBackground && classes.withBackground,
    className
  )

  const labelClasses = cx(
    classes.label,
    disabled && classes.labelDisabled,
    valid && classes.validLabel,
    STANDARD_VARIANT && classes.standardLabel,
    multiline && classes.multilineLabel,
    LARGE_SIZE && STANDARD_VARIANT && classes.largeStandardLabel,
    disabled && classes.disabledLabel,
    labelClassName
  )

  const inputClasses = cx(
    classes.input,
    FILLED_VARIANT && valid && classes.validFilled,
    endAdornment && classes.inputWithEndAdornment,
    multiline && classes.multilineInput,
    LARGE_SIZE && STANDARD_VARIANT && classes.standardLargeInput,
    STANDARD_VARIANT && !withBackground && classes.standardInput,
    STANDARD_VARIANT && withBackground && classes.withBackgroundInput,
    withBackground && valid && classes.withBackgroundInputValid,
    inputClassName
  )

  const helperTextClassName = cx(
    largeSize && classes.largeHelperText
  )

  const helperMessage = !disabled &&
    ((meta.touched && meta.error) || helperText)

  const InputComponent = STANDARD_VARIANT
    ? Input
    : FilledInput

  const showNoValueButton = withNoValueButton && input.value !== NO_VALUE

  return (
    <FormControl
      className={rootClassName}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      variant={variant}
      disabled={disabled}
    >
      <Label
        classes={{ root: labelClasses }}
        htmlFor={input.name}
        shrink={shrink}
        required={required}
        variant={variant}
      >
        {label}
      </Label>

      <InputComponent
        classes={{ root: inputClasses }}
        inputProps={{ ref }}
        {...InputProps}
      />

      {showNoValueButton && (
        <ButtonIcon
          className={classes.noValueButton}
          onClick={handleSetNoValue}
        >
          {NO_VALUE}
        </ButtonIcon>
      )}

      {helperMessage && (
        <FormHelperText className={helperTextClassName}>
          {helperMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default React.forwardRef(TextField)
