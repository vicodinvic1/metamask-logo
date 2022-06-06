import React from 'react'
import { cx } from '@emotion/css'

import { toolbarShadow as toolbarShadowAtom } from 'constants/atoms'

import useClasses from 'hooks/useClasses'
import useRecoilValue from 'hooks/useRecoilValue'

import styles from './styles'

function MainLayoutToolbarWrapper (props) {
  const { children, isSidebarOpen, ...restProps } = props

  const classes = useClasses(styles, isSidebarOpen)

  const toolbarShadow = useRecoilValue(toolbarShadowAtom)

  const rootClassName = cx(
    classes.root,
    toolbarShadow && classes.withShadow,
    'mui-fixed' // to fix paddingRight MUI adds to body
  )

  return (
    <div className={rootClassName} {...restProps}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  )
}

export default MainLayoutToolbarWrapper
