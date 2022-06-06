import { createBrowserHistory } from 'history'

import createStore from 'store'

import { PROD } from 'constants/environment'
export { default as theme } from 'constants/theme'

export const history = createBrowserHistory({
  baseName: PROD
    ? process.env.PUBLIC_PATH
    : '/'
})
export const store = createStore()
