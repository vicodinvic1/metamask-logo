import * as actionTypes from 'constants/actions'

export function openDialog (dialog) {
  return {
    type: actionTypes.DIALOG_OPEN,
    payload: dialog
  }
}

export function closeDialog (params) {
  return { type: actionTypes.DIALOG_CLOSE }
}
