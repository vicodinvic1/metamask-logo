import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import ButtonIcon from 'components/Button/Icon'
import FormControl from 'components/Form/Control'
import FormHelperText from 'components/Form/HelperText'
import Label from 'components/Form/Label'
import Select from 'components/Form/Select'
import SelectItem from 'components/Form/Select/Item'

import BroomIcon from 'icons/Broom'
import SmallArrowDownIcon from 'icons/SmallArrowDown'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function SelectField (props) {
  const {
    children,
    className,
    defaultValue,
    defaultValueLabel,
    endAdornment,
    fullWidth,
    helperText,
    IconComponent,
    input,
    label,
    labelKey,
    margin,
    meta,
    multiple,
    onValueChange,
    onValueReset,
    readOnly,
    required,
    SelectProps,
    shrink,
    variant,
    withOutline,
    withResetButton,
    withShadow,
    withShiftedShadow,
    withExternalEndAdornment,
    ...restProps
  } = props

  const isDefaultValue = input.value === defaultValue

  const classes = useClasses(styles, isDefaultValue)

  const outlinedVariant = variant === 'outlined'

  const InputProps = {
    ...input,
    ...restProps,
    readOnly,
    error: !!(meta.touched && meta.error),
    fullWidth,
    multiple,
    id: input.name
  }

  const { disabled, error } = InputProps

  const withValue = multiple
    ? !!input.value.length
    : input.value

  const rootClassName = cx(
    classes.root,
    withOutline && classes.withOutline,
    withShadow && classes.withShadow,
    withShiftedShadow && classes.withShiftedShadow,
    outlinedVariant && withValue && classes.success,
    error && classes.error,
    disabled && classes.disabled,
    withExternalEndAdornment && classes.withExternalEndAdornment,
    className
  )

  const selectClassName = cx(
    classes.select,
    label && classes.withLabelSelect,
    readOnly && classes.readOnlySelect
  )

  const labelClasses = cx(
    classes.label,
    outlinedVariant && withValue && classes.successLabel,
    disabled && classes.labelDisabled
  )

  const iconClassName = cx(
    label && classes.withLabelIcon
  )

  const endAdornmentClassName = cx(
    withExternalEndAdornment && classes.externalEndAdornment
  )

  const helperMessage = (meta.touched && meta.error) || helperText
  const _shrink = !!withValue || shrink || (!outlinedVariant && disabled)

  const handleResetButtonClick = () => {
    input.onChange(null)
    onValueReset && onValueReset(meta.dispatch)
  }

  const handleChange = (e) => {
    const value = e.target.value

    onValueChange && onValueChange(meta.dispatch, value)
    input.onChange(value)
  }

  const handleMultipleChange = (e) => {
    const value = e.target.value

    onValueChange && onValueChange(meta.dispatch, value)

    if (!e.target.value.length) {
      input.onChange(null)
    } else {
      input.onChange(value)
    }
  }

  if (multiple) {
    InputProps.value = input.value || []
    InputProps.onChange = handleMultipleChange
  } else {
    InputProps.onChange = handleChange
  }

  return (
    <FormControl
      className={rootClassName}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      variant={variant}
    >
      <Label
        classes={{ root: labelClasses }}
        htmlFor={input.name}
        shrink={_shrink}
        required={required}
        variant={variant}
      >
        {label}
      </Label>

      <Select
        IconComponent={readOnly
          ? () => null // due to IconComponent is a required prop :/
          : IconComponent}
        classes={{
          select: selectClassName,
          icon: iconClassName
        }}
        MenuProps={{
          elevation: 2,
          classes: { paper: classes.paper }
        }}
        {...InputProps}
        {...SelectProps}
        endAdornment={endAdornment && (
          <div className={endAdornmentClassName}>
            {endAdornment}
          </div>
        )}
      >
        {defaultValueLabel && (
          <SelectItem value={defaultValue} disabled>
            {defaultValueLabel}
          </SelectItem>
        )}

        {children}
      </Select>

      {withResetButton && withValue && (
        <ButtonIcon
          component='div'
          className={classes.resetButton}
          onClick={handleResetButtonClick}
        >
          <BroomIcon width='14' height='14' />
        </ButtonIcon>
      )}

      {helperMessage && (
        <FormHelperText>
          {helperMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
}

SelectField.propTypes = {
  fullWidth: PropTypes.bool,
  input: PropTypes.object.isRequired,
  margin: PropTypes.string,
  meta: PropTypes.object.isRequired,
  withOutline: PropTypes.bool,
  withResetButton: PropTypes.bool,
  withShadow: PropTypes.bool,
  withShiftedShadow: PropTypes.bool
}

SelectField.defaultProps = {
  IconComponent: SmallArrowDownIcon,
  defaultValue: '',
  fullWidth: true,
  margin: 'dense',
  variant: 'outlined',
  withOutline: true,
  withResetButton: false,
  withShadow: false,
  withShiftedShadow: false
}

export default SelectField
