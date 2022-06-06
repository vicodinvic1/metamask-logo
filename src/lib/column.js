import get from 'lodash/get'

export function getColumnValue (key) {
  return (column, item) => (
    typeof column[key] === 'function'
      ? column[key](item)
      : get(item, column[key]))
}
