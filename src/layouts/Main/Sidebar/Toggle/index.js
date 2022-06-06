import React from 'react'

import ButtonIcon from 'components/Button/Icon'

import OpenSidebarIcon from 'icons/OpenSidebar'
import CloseSidebarIcon from 'icons/CloseSidebar'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Toggle (props) {
  const { dense, onClick, label } = props

  const classes = useClasses(styles)

  return (
    <ButtonIcon
      disableRipple
      onClick={onClick}
      className={classes.root}
    >
      {dense ? <OpenSidebarIcon /> : <CloseSidebarIcon />}

      <div
        className={classes.label}
        style={{ transform: `translate3d(${dense ? 33 : 0}px, 0, 0)` }}
      >
        {label}
      </div>
    </ButtonIcon>
  )
}

export default Toggle
