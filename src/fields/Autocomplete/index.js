import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import Autocomplete from 'components/Form/Autocomplete'
import ButtonIcon from 'components/Button/Icon'

import TextField from 'fields/Text'

import BroomIcon from 'icons/Broom'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function AutocompleteField (props) {
  const {
    autocompleteProps,
    className,
    disabled,
    input,
    inputClassName,
    isValue,
    meta,
    onReset,
    outlined,
    textFieldClassName,
    TextFieldProps,
    withResetButton,
    multiple,
    ...restProps
  } = props

  const classes = useClasses(styles, outlined)

  const {
    getOptionLabel,
    freeSolo,
    ...restAutocompleteProps
  } = autocompleteProps

  const handleInputChange = (e, value) => {
    // For dispatching 'change' redux-form action
    freeSolo && input.onChange(value)
  }

  // getOptionLabel doesn't handle correctly the freeSolo text
  const handleGetOptionLabel = option => (
    freeSolo && typeof option === 'string'
      ? option
      : getOptionLabel(option)
  )

  const rootClassName = cx(
    classes.root,
    className
  )

  return (
    <div className={rootClassName}>
      <Autocomplete
        classes={{
          root: cx(disabled && classes.disabled, autocompleteProps.className),
          listbox: classes.listbox,
          noOptions: classes.noOptions,
          option: classes.option
        }}
        autoComplete
        disabled={disabled}
        freeSolo={freeSolo}
        getOptionLabel={handleGetOptionLabel}
        onInputChange={handleInputChange}
        openOnFocus
        meta={meta}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, inputProps, ...restParams } = params

          return (
            <div ref={InputProps.ref}>
              <TextField
                asAutocompleteField
                className={textFieldClassName}
                disabled={disabled}
                input={input}
                inputClassName={inputClassName}
                meta={meta}
                multiple={multiple}
                isValue={isValue}
                {...restProps}
                {...restParams}
                {...InputProps}
                {...inputProps}
                {...TextFieldProps}
              />
            </div>
          )
        }}
        {...restAutocompleteProps}
      />

      {withResetButton && isValue && (
        <ButtonIcon
          component='div'
          className={classes.resetButton}
          onClick={onReset}
        >
          <BroomIcon width='14' height='14' />
        </ButtonIcon>
      )}
    </div>
  )
}

AutocompleteField.propTypes = {
  autocompleteProps: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  outlined: PropTypes.bool,
  withResetButton: PropTypes.bool
}

AutocompleteField.defaultProps = {
  outlined: true,
  withResetButton: false
}

export default AutocompleteField
