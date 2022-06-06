import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import NotFoundPage from 'containers/NotFoundPage'

import EmptyLayout from 'layouts/Empty'
import ExternalLayout from 'layouts/External'
import MainLayout from 'layouts/Main'

import * as routes from 'constants/routes'

import { isAuthorizedUser } from 'lib/user'

import useCurrentUser from 'hooks/useCurrentUser'

const ACCESS_TYPE_ALL = 'all'
const ACCESS_TYPE_GUEST = 'guest'
const ACCESS_TYPE_USER = 'user'
const ACCESS_TYPES = [
  ACCESS_TYPE_ALL,
  ACCESS_TYPE_GUEST,
  ACCESS_TYPE_USER
]

const LAYOUT_MAIN = 'main'
const LAYOUT_EXTERNAL = 'external'
const LAYOUT_EMPTY = 'empty'
const LAYOUT_TYPES = [LAYOUT_MAIN, LAYOUT_EXTERNAL, LAYOUT_EMPTY]
const LAYOUTS = {
  [LAYOUT_MAIN]: MainLayout,
  [LAYOUT_EXTERNAL]: ExternalLayout,
  [LAYOUT_EMPTY]: EmptyLayout
}

const GUEST_DEFAULT_REDIRECT_LOCATION = { pathname: '/' }

function PageRoute (props) {
  const {
    access,
    computedMatch,
    layout,
    layoutProps,
    location,
    page: Page,
    permission,
    ...restProps
  } = props
  const Layout = LAYOUTS[layout]

  const currentUser = useCurrentUser()
  const isAuthorized = isAuthorizedUser(currentUser)

  let isAllowed = true
  let hasPermission = true
  let redirectTo = GUEST_DEFAULT_REDIRECT_LOCATION

  if (access === ACCESS_TYPE_GUEST && isAuthorized) {
    isAllowed = false
    redirectTo = {
      pathname: '/'
    }
  }

  if (access === ACCESS_TYPE_USER && !isAuthorized) {
    isAllowed = false
    redirectTo.state = { from: { pathname: location.pathname } }
  }

  if (!isAllowed) {
    return <Redirect to={redirectTo} />
  }

  if (permission) {
    hasPermission = permission(currentUser)
  }

  return (
    <Route
      {...restProps}
      render={props => (
        <Layout {...layoutProps}>
          {hasPermission
            ? <Page {...props} />
            : <NotFoundPage inverted />}
        </Layout>
      )}
    />
  )
}

PageRoute.propTypes = {
  access: PropTypes.oneOfType([
    PropTypes.oneOf(ACCESS_TYPES),
    PropTypes.func.isRequired
  ]).isRequired,
  layout: PropTypes.oneOf(LAYOUT_TYPES),
  page: PropTypes.func.isRequired
}

PageRoute.defaultProps = {
  access: ACCESS_TYPE_USER,
  layout: LAYOUT_MAIN,
  layoutProps: {}
}

export default PageRoute
