import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonIcon from 'components/Button/Icon'
import FilledInput from 'components/Form/FilledInput'

import CrossIcon from 'icons/Cross'
import LoupeIcon from 'icons/Loupe'

import useDebounce from 'hooks/useDebounce'
import useClasses from 'hooks/useClasses'

import styles from './styles'

function FormInputSearch (props) {
  const {
    className,
    input,
    inputValidator,
    timeout,
    withShadow,
    ...restProps
  } = props

  const [value, setValue] = React.useState(input.value)

  const classes = useClasses(styles)

  useDebounce(
    () => {
      input.onChange(value)
    }, timeout, [value]
  )

  const handleChange = React.useCallback(
    e => setValue(e.target.value),
    []
  )
  const handleReset = () => setValue('')

  const rootClassName = cx(
    classes.root,
    className
  )

  const inputClassName = cx(
    classes.input,
    withShadow && classes.withShadow,
    value && classes.withValue
  )

  React.useEffect(() => {
    setValue(input.value)
  }, [input.value])

  return (
    <div className={rootClassName}>
      <FilledInput
        {...restProps}
        disableUnderline
        startAdornment={<LoupeIcon className={classes.startAdornment} />}
        className={inputClassName}
        onChange={handleChange}
        value={value || ''}
      />

      {value && (
        <ButtonIcon
          className={classes.resetButton}
          onClick={handleReset}
        >
          <CrossIcon />
        </ButtonIcon>
      )}
    </div>
  )
}

FormInputSearch.propTypes = {
  timeout: PropTypes.number,
  withShadow: PropTypes.bool
}

FormInputSearch.defaultProps = {
  placeholder: 'Search',
  timeout: 400,
  withShadow: true
}

export default FormInputSearch
