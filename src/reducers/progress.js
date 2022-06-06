import * as types from 'constants/actions'

const initalState = {}

export default function progress (state = initalState, action) {
  if (action.type === types.PROGRESS_STOP) {
    return initalState
  }

  if (action.type === types.PROGRESS_START) {
    return {
      type: action.payload.type
    }
  }

  return state
}
