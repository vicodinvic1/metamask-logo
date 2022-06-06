import React from 'react'
import { Switch } from 'react-router-dom'
import universal from 'react-universal-component'
import cookies from 'browser-cookies'

import Spinner from 'components/Spinner'

import PageRoute from 'routes/Page'
import NotFoundPage from 'pages/NotFound'

import * as routes from 'constants/routes'

const RELOAD_COOKIE_KEY = 'wasReloaded'

const createUniversalPage = page => universal(
  props => import(`pages/${page}`),
  {
    onError: () => {
      if (!cookies.get(RELOAD_COOKIE_KEY)) {
        cookies.set(RELOAD_COOKIE_KEY, 'true')
        window.location.reload()
      }
    },
    onLoad: () => { cookies.erase(RELOAD_COOKIE_KEY) },
    loading: () => <Spinner />
  }
)

const LoginPage = createUniversalPage('Login')

const UsersPage = createUniversalPage('Users')

function Routes () {
  return (
    <Switch>
      <PageRoute
        access='guest'
        exact
        layout='external'
        page={LoginPage}
        path={routes.LOGIN_ROUTE}
      />

      <PageRoute
        exact
        page={UsersPage}
        path={routes.USERS_ROUTE}
      />

      <PageRoute access='all' layout='external' page={NotFoundPage} />
    </Switch>
  )
}

export default Routes
