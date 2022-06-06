import * as actions from 'constants/actions'
import * as schemas from 'constants/entitySchemas'

import { requestAPI } from 'actions/api'
import {
  createEntity,
  deleteEntity,
  fetchEntities
} from 'actions/entities'

const endpoint = 'users'

export function authUser (token) {
  return {
    type: actions.USER_AUTH,
    payload: token
  }
}

export function loginUser () {
  return {
    type: actions.USER_LOGIN
  }
}

export function logoutUser () {
  return {
    type: actions.USER_LOGOUT
  }
}

export function updateUser () {
  return {}
}

export function simpleFetchUser (id) {
  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, encodeURIComponent(id)] // to handle `|` symbol in Safari
      }
    }
  })
}

export function fetchUsers (payload) {
  return fetchEntities({
    endpoint,
    params: { search: payload.filter?.search },
    schema: schemas.users
  })
}

export function createUser (payload) {
  return createEntity({
    endpoint,
    data: payload,
    schema: schemas.user
  })
}

export function deleteUser (id) {
  return deleteEntity({
    id,
    endpoint,
    schema: schemas.user
  })
}
