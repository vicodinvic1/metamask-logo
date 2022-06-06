import * as actionTypes from 'constants/actions'

const initialState = {
  isAuthorized: false
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_AUTH:
      return {
        ...action.payload,
        isAuthorized: true
      }

    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        isAuthorized: false
      }

    default:
      return state
  }
}
