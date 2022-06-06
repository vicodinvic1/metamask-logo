export const DATE_FORMAT = 'dd.MM.yyyy'
export const TIME_FORMAT = 'HH:mm'
export const TIME_DATE_FORMAT = `${TIME_FORMAT} ${DATE_FORMAT} `

export const CURRENT_YEAR = new Date().getFullYear()
export const CURRENT_MONTH = new Date().getMonth() + 1
export const CURRENT_YEAR_LABEL = 'This year'
export const CURRENT_MONTH_NAME_LABEL = 'This month'

export const MONTHS_NAMES = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
]

export const CURRENT_MONTH_NAME = MONTHS_NAMES[CURRENT_MONTH - 1]

export const YEARS = Array.from(
  { length: 3 },
  (year, i) => {
    const prevYear = CURRENT_YEAR - i

    return ({
      label: i === 0
        ? CURRENT_YEAR_LABEL
        : prevYear,
      year: i === 0
        ? CURRENT_YEAR
        : prevYear
    })
  }
)
