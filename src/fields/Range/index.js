import React from 'react'
import PropTypes from 'prop-types'

import ButtonIcon from 'components/Button/Icon'
import Input from 'components/Input'

import BroomIcon from 'icons/Broom'

import { notifyError } from 'actions/notification'

import useDebounce from 'hooks/useDebounce'
import useClasses from 'hooks/useClasses'

import styles from './styles'

const TIMEOUT = 400
function RangeField (props) {
  const {
    className,
    color,
    errorMessage,
    input,
    meta,
    placeholderFrom,
    placeholderTo,
    validator,
    withShadow
  } = props

  const classes = useClasses(styles)

  const [value, setValue] = React.useState(input.value || {})

  useDebounce(
    () => {
      if (value.to && value.from) {
        input.onChange(value)
      }
    }, TIMEOUT, [value]
  )

  const handleValueSet = React.useCallback(
    (key, newValue) => {
      setValue(prevValue => ({
        ...prevValue,
        [key]: newValue
      }))
    },
    []
  )

  const handleResetValue = React.useCallback(
    () => {
      setValue({})
      input.onChange('')
    },
    []
  )

  const handleChangeValue = React.useCallback(
    key => (e) => {
      if (validator) {
        if (e.target.value.match(validator)) {
          handleValueSet(key, e.target.value)
        } else {
          meta.dispatch(notifyError(errorMessage))
        }
      } else {
        handleValueSet(key, e.target.value)
      }
    },
    []
  )

  React.useEffect(() => {
    setValue(input.value)
  }, [input.value])

  React.useEffect(() => {
    if (!value.from && !value.to && input.value) {
      input.onChange('')
    }
  }, [value])

  return (
    <div className={className}>
      <div className={classes.wrapper}>
        <Input
          color={color}
          placeholder={placeholderFrom}
          value={value.from || ''}
          onChange={handleChangeValue('from')}
          withShadow={withShadow}
        />

        <Input
          color={color}
          placeholder={placeholderTo}
          value={value.to || ''}
          onChange={handleChangeValue('to')}
          withShadow={withShadow}
        />
      </div>

      {(value.to || value.from) && (
        <ButtonIcon
          component='div'
          className={classes.resetButton}
          onClick={handleResetValue}
        >
          <BroomIcon />
        </ButtonIcon>
      )}
    </div>
  )
}

RangeField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholderFrom: PropTypes.string,
  placeholderTo: PropTypes.string
}

export default RangeField
