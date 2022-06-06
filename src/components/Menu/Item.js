import React from 'react'
import MUIMenuItem from '@mui/material/MenuItem'

function MenuItem (props, ref) {
  return <MUIMenuItem {...props} ref={ref} />
}

export default React.forwardRef(MenuItem)
