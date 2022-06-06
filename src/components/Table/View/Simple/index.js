import React from 'react'
import PropTypes from 'prop-types'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TermsTable (props) {
  const { items, valueColumnWidth, ...restProps } = props

  const classes = useClasses(styles)

  return (
    <table
      className={classes.root}
      {...restProps}
    >
      <tbody>
        {items.map(({ label, value }, i) => (
          <tr className={classes.item} key={i}>
            <td>
              {label}
            </td>

            <td
              className={classes.value}
              width={valueColumnWidth}
            >
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TermsTable.propTypes = {
  items: PropTypes.array.isRequired
}

export default TermsTable
