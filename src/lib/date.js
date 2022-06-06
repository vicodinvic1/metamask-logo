import format from 'date-fns/format'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { parse, end } from 'iso8601-duration'
import titleize from 'titleize'

import {
  DATE_FORMAT,
  TIME_FORMAT,
  TIME_DATE_FORMAT,
  CURRENT_MONTH,
  CURRENT_YEAR,
  CURRENT_MONTH_NAME,
  CURRENT_MONTH_NAME_LABEL,
  MONTHS_NAMES
} from 'constants/date'

export function formatDuration (date) {
  const parsed = parse(date)
  const dateEnd = end(parsed)

  return formatDistanceToNowStrict(dateEnd)
}

export function formatDate (date, formatStr = DATE_FORMAT, options) {
  if (!date) {
    return null
  }

  return format(new Date(date), formatStr, options)
}

export function formatTime (date, formatStr = TIME_FORMAT, options) {
  return formatDate(date, formatStr, options)
}

export function formatTimeDate (date, formatStr = TIME_DATE_FORMAT, options) {
  return formatDate(date, formatStr, options)
}

export function sortByYearAndMonth (a, b) {
  return new Date(a.year, a.month, 1) - new Date(b.year, b.month, 1)
}

export function getCurrentMonthByYear (month, year) {
  let currentMonth = CURRENT_MONTH

  if (typeof month === 'string') {
    month = month.toLowerCase()
    currentMonth = CURRENT_MONTH_NAME
  }

  return month === currentMonth && year === CURRENT_YEAR
}

export function constructMonths (year) {
  const isCurrentYear = year === CURRENT_YEAR
  const monthsCount = isCurrentYear
    ? CURRENT_MONTH
    : 12

  const months = Array.from(
    { length: monthsCount },
    (_, i) => ({
      number: i + 1,
      month: MONTHS_NAMES[i],
      label: isCurrentYear && i + 1 === monthsCount
        ? CURRENT_MONTH_NAME_LABEL
        : titleize(MONTHS_NAMES[i])
    })
  )

  return months.reverse()
}
