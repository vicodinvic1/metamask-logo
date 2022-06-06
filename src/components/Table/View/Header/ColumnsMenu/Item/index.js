import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Checkbox from 'components/Checkbox'
import Tooltip from 'components/Tooltip'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TableViewColumnsMenuItem (props) {
  const {
    checked,
    disabled,
    label,
    onClick,
    tooltipTitle
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    disabled && classes.disabled
  )

  const layout = (
    <div
      className={rootClassName}
      onClick={onClick}
    >
      <Checkbox checked={checked} disabled={disabled} />

      <div>
        {label}
      </div>
    </div>
  )

  if (disabled) {
    return (
      <Tooltip title={tooltipTitle}>
        {layout}
      </Tooltip>
    )
  }

  return layout
}

TableViewColumnsMenuItem.propTypes = {
  tooltipTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default React.memo(TableViewColumnsMenuItem)
