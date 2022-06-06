import React from 'react'
import InputLabel from '@mui/material/InputLabel'

function Label ({ children, ...restProps }, ref) {
  if (!children) {
    return null
  }

  return (
    <InputLabel {...restProps} ref={ref}>
      {children}
    </InputLabel>
  )
}

export default React.forwardRef(Label)
