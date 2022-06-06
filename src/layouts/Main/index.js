import React from 'react'

import useClasses from 'hooks/useClasses'
import useCurrentUser from 'hooks/useCurrentUser'
import useLocalStorage from 'hooks/useLocalStorage'

import styles from './styles'

import SideBar from './Sidebar'
import Progress from './Progress'
import Wrapper from './Wrapper'

function MainLayout (props) {
  const { children } = props

  const classes = useClasses(styles)
  const currentUser = useCurrentUser()

  const [sidebarState, setSidebarState] = useLocalStorage(
    `${currentUser.email}-sidebar-state`
  )
  const initialState = typeof sidebarState === 'undefined'
    ? true
    : sidebarState
  const [sidebarOpen, setSidebarOpen] = React.useState(initialState)

  const handleSidebarOpenSet = React.useCallback(
    () => setSidebarOpen(sidebarOpen => {
      setSidebarState(!sidebarOpen)
      return !sidebarOpen
    }),
    []
  )

  return (

    <div className={classes.root}>
      <Progress />

      <SideBar onClick={handleSidebarOpenSet} open={sidebarOpen} />

      <Wrapper isSidebarOpen={sidebarOpen}>
        {children}
      </Wrapper>
    </div>
  )
}

export default MainLayout
