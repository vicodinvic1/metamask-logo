import React from 'react'

import useClasses from 'hooks/useClasses'
import useCurrentUser from 'hooks/useCurrentUser'

import useRouter from 'hooks/useRouter'

import styles from './styles'
import Item from './Item'
import createMenu from './menu'

function MainLayoutNavMenu (props) {
  const { dense } = props
  const { location } = useRouter()

  const classes = useClasses(styles)
  const currentUser = useCurrentUser()

  const menu = React.useMemo(
    () => createMenu(currentUser),
    []
  )

  return (
    <div className={classes.root}>
      {menu.map(({ icon, label, route, matchRoute }, i) => {
        const defaultMatch = location.pathname.includes(route)

        return (
          <Item
            dense={dense}
            key={i}
            Icon={icon}
            primaryLabel={label}
            route={route}
            match={matchRoute || defaultMatch}
          />
        )
      })}
    </div>
  )
}

export default MainLayoutNavMenu
