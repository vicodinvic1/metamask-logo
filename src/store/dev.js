import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import api from 'middlewares/api'
import authRequest from 'middlewares/authRequest'
import authSession from 'middlewares/authSession'
import normalizr from 'middlewares/normalizr'

import createRootReducer from 'reducers'

import { history } from '../bootstrap'

export default function (initialState) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(
      thunk,
      authRequest,
      api,
      authSession,
      normalizr,
      routerMiddleware(history),
      createLogger({
        collapsed: true,
        duration: true
      })
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
