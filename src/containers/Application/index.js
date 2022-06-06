import React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@mui/material/CssBaseline'

import SnackbarProvider from 'components/SnackbarProvider'

import ErrorBoundary from './ErrorBoundary'
import ApplicationContainer from './Container'

function Application (props) {
  return (
    <ErrorBoundary>
      <CssBaseline />

      <SnackbarProvider>
        <ApplicationContainer />
      </SnackbarProvider>
    </ErrorBoundary>
  )
}

export default hot(Application)
