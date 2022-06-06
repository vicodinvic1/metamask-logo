import * as actionTypes from 'constants/actions'

export function updateActivity (payload) {
  return {
    type: actionTypes.ACTIVITY_UPDATE,
    payload
  }
}

export function finishActivity () {
  return { type: actionTypes.ACTIVITY_FINISH }
}

export function openActivityPanel () {
  return { type: actionTypes.ACTIVITY_PANEL_OPEN }
}

export function closeActivityPanel () {
  return { type: actionTypes.ACTIVITY_PANEL_CLOSE }
}
