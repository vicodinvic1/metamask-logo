import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Chip from 'components/Chip'

import { INVOICE_ACTION_TYPE_NAME } from 'constants/action'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function InvoiceActionTypeChip (props) {
  const { className, type, ...restProps } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes[type],
    className
  )

  return (
    <Chip
      className={rootClassName}
      label={INVOICE_ACTION_TYPE_NAME[type]}
      {...restProps}
    />
  )
}

InvoiceActionTypeChip.propTypes = {
  type: PropTypes.string
}

export default InvoiceActionTypeChip
