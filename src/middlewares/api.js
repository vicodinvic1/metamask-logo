import axios, { isCancel } from 'axios'
import axiosMiddleware, { getActionTypes } from 'redux-axios-middleware'
import { stringify } from 'qs'

import { API_URL } from 'constants/environment'

import { notifyError } from 'actions/notification'
import { progressQueryStart, progressStop } from 'actions/progress'

import { joinPath } from 'lib/url'

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  paramsSerializer: function (params) {
    return stringify(params, { arrayFormat: 'comma' })
  }
})

const navigator = window.navigator

export default axiosMiddleware(client, {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [({ dispatch }, req) => {
      dispatch(progressQueryStart())
      return req
    }]
  },

  getRequestConfig (action) {
    const { request } = action.payload

    if (request.endpoint) {
      request.url = request.endpoint
      delete request.endpoint
    }

    if (Array.isArray(request.url)) {
      request.url = joinPath(...request.url)
    }

    return request
  },

  onSuccess ({ action, next, response, getState, dispatch }, actionOptions) {
    const nextAction = {
      type: getActionTypes(action)[1],
      payload: response,
      meta: {
        previousAction: action
      }
    }

    dispatch(progressStop())

    return next(nextAction)
  },

  onError ({ dispatch, error, action }) {
    if (isCancel(error)) {
      return
    }

    const { response } = error

    let STATUS = response?.status

    const apiError = response?.data?.errorMessage
    const axiosError = error.message
    const statusError = STATUS && `Error ${STATUS}`

    // To handle preflight request error when service is unavailable
    // If error is timeout - error will include code: ECONNABORTED
    if (error.isAxiosError && !response && !error.code) {
      // To distinguish no internet error
      if (navigator?.onLine) {
        STATUS = 503
      }
    }

    const errorMessage = apiError || statusError || axiosError

    // Unauthorized error workaround

    errorMessage && dispatch(notifyError(errorMessage))

    dispatch(progressStop())

    throw new Error({ status: STATUS, message: errorMessage })
  }
})
