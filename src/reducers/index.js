import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { connectRouter } from 'connected-react-router'

import * as actionTypes from 'constants/actions'

import dialog from './dialog'
import notifications from './notifications'
import progress from './progress'
import user from './user'
import users from './users'

function resetStoreEnhancer (rootReducer) {
  return (state, action) => {
    if (action.type !== actionTypes.USER_LOGOUT) {
      return rootReducer(state, action)
    }

    const newState = rootReducer(undefined, {})
    newState.router = state.router
    return newState
  }
}

export default history => resetStoreEnhancer(
  combineReducers({
    notifications,
    form,
    progress,
    router: connectRouter(history),
    dialog,
    user,
    users,
  })
)
