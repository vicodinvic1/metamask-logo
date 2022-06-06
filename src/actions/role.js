import { requestAPI } from 'actions/api'

const endpoint = 'roles'

export function fetchRoles () {
  return requestAPI({
    payload: {
      request: {
        endpoint
      }
    }
  })
}
