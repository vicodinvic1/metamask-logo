export { default as isArray } from 'lodash/isArray'

export function createArraySort (asc = true) {
  return (a, b) => a > b ? asc ? 1 : -1 : asc ? -1 : 1
}

export function createSortByAttr (attr, asc = true) {
  return (a, b) => a[attr] > b[attr] ? asc ? 1 : -1 : asc ? -1 : 1
}

export const createArrayFromLength = (length, term = 1) => {
  return Array.from(
    { length },
    (_, i) => term + i
  )
}

export function createSortByYearAndMonth (monthKey = 'monthIndex') {
  return (a, b) => {
    return new Date(a.year, a[monthKey], 1) - new Date(b.year, b[monthKey], 1)
  }
}
