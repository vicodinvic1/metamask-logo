import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import numeral from 'numeral'
import pluralize from 'pluralize'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ItemCountLabel (props) {
  const {
    className,
    children,
    count,
    label,
    format,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    className
  )

  const _label = pluralize(label, count)

  return (
    <div className={rootClassName} {...restProps}>
      {count
        ? `${numeral(count).format(format)} ${_label}`
        : `0 ${_label}`}
    </div>
  )
}

ItemCountLabel.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
  format: PropTypes.string
}

ItemCountLabel.defaultProps = {
  count: 0,
  label: 'item',
  format: '0,0'
}

function areEqual (prevProps, nextProps) {
  return prevProps.count === nextProps.count
}

export default React.memo(ItemCountLabel, areEqual)
