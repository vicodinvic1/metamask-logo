import React from 'react'
import Portal from '@mui/material/Portal'

import { MainLayoutToolbarPortalContext } from 'layouts/Main/context'

function ToolbarPortal ({ children }) {
  return (
    <MainLayoutToolbarPortalContext.Consumer>
      {(ref) => {
        return (
          <Portal container={ref}>
            {children}
          </Portal>
        )
      }}
    </MainLayoutToolbarPortalContext.Consumer>
  )
}

export default ToolbarPortal
