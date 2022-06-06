import { requestAPI } from 'actions/api'

const endpoint = '/networks'

export function fetchNetworks (payload) {
  return requestAPI({
    payload: {
      request: {
        endpoint,
        params: {
          pageNumber: 0,
          ...payload.input
        }
      }
    }
  })
}
