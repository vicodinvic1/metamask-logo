import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'
import MUIPopover from '@mui/material/Popover'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const DEFAULT = 'default'
const DENSE = 'dense'
const NONE = 'none'
const PADDINGS = [DEFAULT, DENSE, NONE]

function Popover (props) {
  const { className, padding, ...restProps } = props

  const classes = useClasses(styles)

  return (
    <MUIPopover
      classes={{ paper: cx(classes.paper, className) }}
      PaperProps={{
        classes: { root: classes[padding] },
        elevation: 1
      }}
      disableScrollLock
      {...restProps}
    />
  )
}

Popover.propTypes = {
  padding: PropTypes.oneOf(PADDINGS)
}

Popover.defaultProps = {
  padding: DEFAULT,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right'
  }
}

export default Popover
