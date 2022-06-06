import * as actionTypes from 'constants/actions'

const initalState = null

export default function dialog (state = initalState, action) {
  if (action.type === actionTypes.DIALOG_CLOSE) {
    return initalState
  }

  if (action.type === actionTypes.DIALOG_OPEN) {
    return action.payload
  }

  return state
}
