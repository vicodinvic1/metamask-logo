import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import CircularProgress from '@mui/material/CircularProgress'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Spinner (props) {
  const {
    className,
    centered,
    style,
    spinnerClassName,
    withIndent,
    size,
    disabled,
    ...restProps
  } = props

  const classes = useClasses(styles, size)

  const rootClassName = cx(
    classes.root,
    centered && classes.centered,
    withIndent && classes.withIndent,
    className
  )

  return (
    <div className={rootClassName} style={style}>
      {!disabled && (
        <CircularProgress
          className={spinnerClassName}
          size={size}
          {...restProps}
        />
      )}

      {disabled && <div className={classes.disabled} />}
    </div>
  )
}

Spinner.propTypes = {
  centered: PropTypes.bool,
  withIndent: PropTypes.bool
}

Spinner.defaultProps = {
  centered: true,
  size: 64,
  thickness: 4,
  withIndent: false
}

export default Spinner
