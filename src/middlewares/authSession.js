import * as actions from 'constants/actions'

import { clearSession } from 'lib/auth'

export default store => next => action => {
  const { type } = action

  if (type === actions.USER_LOGOUT) {
    clearSession()
  }

  return next(action)
}
