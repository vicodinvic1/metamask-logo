import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import api from 'middlewares/api'
import authRequest from 'middlewares/authRequest'
import authSession from 'middlewares/authSession'
import normalizr from 'middlewares/normalizr'

import createRootReducer from 'reducers'

import { history } from '../bootstrap'

export default function (initialState) {
  return createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(
      thunk,
      authRequest,
      api,
      authSession,
      normalizr,
      routerMiddleware(history)
    )
  )
}
