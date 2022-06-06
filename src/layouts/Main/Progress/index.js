import React from 'react'

import LinearProgress from 'components/Progress/Linear'

import useSelector from 'hooks/useSelector'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function MainLayoutProgress () {
  const classes = useClasses(styles)

  const progressType = useSelector(state => state.progress.type)

  if (!progressType) {
    return null
  }

  const progressVariant = progressType === 'query'
    ? 'query'
    : 'indeterminate'

  return (
    <LinearProgress
      className={classes.root}
      variant={progressVariant}
    />
  )
}

export default MainLayoutProgress
