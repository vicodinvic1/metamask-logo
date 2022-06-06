import React from 'react'

import useClasses from 'hooks/useClasses'

import styles from './styles'

import NavMenu from './NavMenu'
import Toggle from './Toggle'

function MainLayoutSidebar (props) {
  const { open, onClick } = props

  const classes = useClasses(styles, open)

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <NavMenu dense={!open} />

        <Toggle dense={!open} onClick={onClick} label='Toggle sidebar' />
      </div>
    </div>
  )
}

export default MainLayoutSidebar
