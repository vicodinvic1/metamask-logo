import React from 'react'
import PropTypes from 'prop-types'
import MUIFade from '@mui/material/Fade'

function Fade (props) {
  const { children, className, withWrapper, ...restProps } = props

  return (
    <MUIFade {...restProps} timeout={500}>
      {withWrapper || className
        ? <div className={className}>{children}</div>
        : children}
    </MUIFade>
  )
}

Fade.propTypes = {
  withWrapper: PropTypes.bool
}

Fade.defaultProps = {
  withWrapper: false
}

export default Fade
