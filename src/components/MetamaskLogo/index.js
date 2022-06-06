import React from 'react'
import ModelViewer from 'metamask-logo'

function MetamaskLogo () {
  const ref = React.useRef()

  React.useEffect(() => {
    const model = ModelViewer({
      pxNotRatio: true,
      width: 120,
      height: 120,
      followMouse: true
    })

    ref.current.appendChild(model.container)
  }, [])

  return <div ref={ref} />
}

export default MetamaskLogo
