import React from 'react'
import { SnackbarProvider } from 'notistack'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Provider (props) {
  const classes = useClasses(styles)

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      autoHideDuration={10000}
      classes={{
        containerRoot: classes.container,
        variantSuccess: classes.success,
        variantError: classes.error,
        variantWarning: classes.warning
      }}
      hideIconVariant
      maxSnack={3}
    >
      {props.children}
    </SnackbarProvider>
  )
}

export default Provider
