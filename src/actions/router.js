import { goBack, replace, push } from 'connected-react-router'
import { parse, stringify } from 'qs'

import { PARSE_OPTIONS, STRINGIFY_OPTIONS } from 'constants/qs'

export function pushRoute (route) {
  if (typeof route === 'object') {
    if (route.params) {
      route.search = stringify(route.params, STRINGIFY_OPTIONS)
      delete route.params
    }
  }

  return push(route)
}

export function replaceRoute (route) {
  if (typeof route === 'object') {
    if (route.params) {
      route.search = stringify(route.params, STRINGIFY_OPTIONS)
      delete route.params
    }
  }

  return replace(route)
}

export function pushRouteParams (params, replace) {
  return (dispatch, getState) => {
    const { location } = getState().router

    return dispatch(pushRoute({
      ...location,
      params: replace
        ? params
        : {
            ...parse(location.search, PARSE_OPTIONS),
            ...params
          }
    }))
  }
}

export function replaceRouteParams (params, replace) {
  return (dispatch, getState) => {
    const { location } = getState().router

    return dispatch(replaceRoute({
      ...location,
      params: replace
        ? params
        : {
            ...parse(location.search, PARSE_OPTIONS),
            ...params
          }
    }))
  }
}

export const goBackRoute = goBack
