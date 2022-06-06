import React from 'react'

import Spinner from 'components/Spinner'

import Routes from 'routes'

// import { getSession, handleAuth } from 'lib/auth'

// import useDispatch from 'hooks/useDispatch'

import useNotification from 'hooks/useNotification'

function ApplicationContainer (props) {
  useNotification()

  const [isInit, setInit] = React.useState(true)
  // const sessionToken = getSession()

  // const dispatch = useDispatch()

  // const handleUserAuth = React.useCallback(
  //   async () => {
  //     if (sessionToken) {
  //       try {
  //         await handleAuth(dispatch, sessionToken)
  //       } catch (e) {
  //         console.log(e)
  //       } finally {
  //         setInit(true)
  //       }
  //     } else {
  //       setInit(true)
  //     }
  //   },
  //   []
  // )

  // React.useEffect(() => {
  //   handleUserAuth()
  // }, [])

  return isInit
    ? <Routes />
    : <Spinner />
}

export default ApplicationContainer
