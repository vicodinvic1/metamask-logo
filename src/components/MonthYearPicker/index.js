import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import SelectItem from 'components/Form/Select/Item'
import Select from 'components/Select'

import { CURRENT_YEAR, YEARS } from 'constants/date'

import { constructMonths } from 'lib/date'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const MONTH_KEY = 'month'
const YEAR_KEY = 'year'

function MonthYearPicker (props) {
  const { className, disabled, initialValues, onChange } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    className
  )

  const [date, setDate] = React.useState(initialValues)

  const MONTHS = React.useMemo(
    () => constructMonths(date.year),
    [date.year]
  )

  const handleDateChange = React.useCallback(
    key => (e) => setDate(date => {
      const nextDate = {
        ...(date || {}),
        [key]: e.target.value
      }

      if (e.target.value === CURRENT_YEAR) {
        nextDate[MONTH_KEY] = initialValues.month
      }

      return nextDate
    }),
    []
  )

  React.useEffect(() => {
    if (!disabled) {
      onChange(date)
    } else {
      setDate(initialValues)
    }
  }, [disabled, date])

  return (
    <div className={rootClassName}>
      <Select
        defaultValue={initialValues.month}
        onChange={handleDateChange(MONTH_KEY)}
        value={date.month}
        disabled={disabled}
      >
        {MONTHS.map(({ month, label }, i) => {
          return (
            <SelectItem value={month} key={i}>
              {label}
            </SelectItem>
          )
        })}
      </Select>

      <Select
        defaultValue={initialValues.year}
        onChange={handleDateChange(YEAR_KEY)}
        value={date.year}
        disabled={disabled}
      >
        {YEARS.map(({ year, label }, i) => (
          <SelectItem value={year} key={i}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

MonthYearPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}

export default MonthYearPicker
