import * as actions from 'constants/actions'

import { downloadFile } from 'lib/file'

export function requestAPI (opts) {
  return {
    types: [
      actions.API_REQUEST,
      actions.API_REQUEST_SUCCESS,
      actions.API_REQUEST_FAILURE
    ],
    ...opts
  }
}

export function downloadApiDocs (fileFormat) {
  const endpoint = fileFormat === 'html'
    ? 'api-documentation.html'
    : 'openapi.yaml'

  return (dispatch) => {
    return dispatch(
      requestAPI({
        payload: {
          request: {
            endpoint,
            responseType: 'blob'
          }
        }
      })
    ).then(res => downloadFile(res, endpoint))
  }
}

export function downloadWebhookSchemas () {
  return (dispatch) => {
    return dispatch(
      requestAPI({
        payload: {
          request: {
            endpoint: 'webhook-schemas.zip',
            responseType: 'blob'
          }
        }
      })
    ).then(res => downloadFile(res, 'webhook-schemas.zip'))
  }
}
