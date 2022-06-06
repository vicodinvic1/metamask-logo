import React from 'react'

import ButtonIcon from 'components/Button/Icon'

import CrossIcon from 'icons/Cross'

import * as actionTypes from 'constants/actions'

export function closeSnackbar (key) {
  return {
    type: actionTypes.CLOSE_SNACKBAR,
    dismissAll: !key,
    key
  }
}

export function removeSnackbar (key) {
  return {
    type: actionTypes.REMOVE_SNACKBAR,
    key
  }
}

export function enqueueSnackbar (notification) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.ENQUEUE_SNACKBAR,
      notification: {
        ...notification,
        key: new Date().getTime() + Math.random(),
        options: {
          ...notification.options,
          action: key => (
            <ButtonIcon onClick={() => dispatch(closeSnackbar(key))}>
              <CrossIcon />
            </ButtonIcon>
          )
        }
      }
    })
  }
}

export function notifySuccess (message) {
  return enqueueSnackbar({ message, options: { variant: 'success' } })
}

export function notifyWarn (message) {
  return enqueueSnackbar({ message, options: { variant: 'warning' } })
}

export function notifyError (message) {
  return enqueueSnackbar({ message, options: { variant: 'error' } })
}
