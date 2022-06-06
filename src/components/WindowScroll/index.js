import React from 'react'

import useWindowScroll from 'hooks/useWindowScroll'

function WindowScroll (props) {
  const { onWindowScroll } = props

  const windowScroll = useWindowScroll()

  React.useEffect(
    () => onWindowScroll(windowScroll),
    [windowScroll]
  )

  return null
}

export default WindowScroll
