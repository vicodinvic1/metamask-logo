import jwtDecode from 'jwt-decode'

import { authUser } from 'actions/user'

export const SESSION_TOKEN_KEY = 'session-token'

const Storage = window.localStorage

export function getSession () {
  return Storage.getItem(SESSION_TOKEN_KEY)
}

export function setSession (token) {
  Storage.setItem(SESSION_TOKEN_KEY, token)
}

export function clearSession () {
  Storage.removeItem(SESSION_TOKEN_KEY)
}

export async function handleAuth (dispatch, accessToken) {
  const { permissions } = jwtDecode(accessToken)

  return dispatch(authUser({ accessToken, permissions }))
}
