import React from 'react'
import Portal from '@mui/material/Portal'

import { MainLayoutToolbarSecondaryPortalContext } from 'layouts/Main/context'

function ToolbarPortal ({ children }) {
  return (
    <MainLayoutToolbarSecondaryPortalContext.Consumer>
      {(ref) => {
        return (
          <Portal container={ref}>
            {children}
          </Portal>
        )
      }}
    </MainLayoutToolbarSecondaryPortalContext.Consumer>
  )
}

export default ToolbarPortal
