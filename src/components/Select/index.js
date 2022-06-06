import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import FormSelect from 'components/Form/Select'
import SelectItem from 'components/Form/Select/Item'
import Label from 'components/Form/Label'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Select (props) {
  const {
    className,
    onChange,
    defaultValueLabel,
    children,
    defaultValue,
    label,
    disabled,
    value,
    withOutline,
    withShadow,
    withShiftedShadow,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    withOutline && classes.withOutline,
    withShadow && classes.withShadow,
    withShiftedShadow && classes.withShiftedShadow,
    className
  )

  return (
    <div className={rootClassName} {...restProps}>
      {label && (
        <Label className={classes.label}>
          {label}
        </Label>
      )}

      <FormSelect
        classes={{ root: classes.select }}
        fullWidth
        defaultValue={defaultValue}
        displayEmpty
        disabled={disabled}
        onChange={onChange}
        value={value}
      >
        {defaultValueLabel && (
          <SelectItem value={defaultValue}>
            {defaultValueLabel}
          </SelectItem>
        )}

        {children}
      </FormSelect>
    </div>
  )
}

Select.propTypes = {
  withOutline: PropTypes.bool,
  withShadow: PropTypes.bool,
  withShiftedShadow: PropTypes.bool
}

Select.defaultProps = {
  withOutline: false,
  withShadow: false,
  withShiftedShadow: false
}

export default Select
