import * as actions from 'constants/actions'

import { getSession } from 'lib/auth'

export default store => next => async action => {
  switch (action.type) {
    case actions.USER_LOGIN:
      break

    case actions.USER_LOGOUT:
      break
  }

  if (action.payload?.request) {
    action = mapSessionToRequestAction(action)
  }

  return next(action)
}

function mapSessionToRequestAction (action) {
  const sessionToken = getSession()

  if (sessionToken) {
    action.payload.request.headers = action.payload.request.headers || {}
    action.payload.request.headers.Authorization = `Bearer ${sessionToken}`
  }

  return action
}
