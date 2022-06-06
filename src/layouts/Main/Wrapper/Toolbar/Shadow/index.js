import React from 'react'
import PropTypes from 'prop-types'

import WindowScroll from 'components/WindowScroll'

import { toolbarShadow as toolbarShadowAtom } from 'constants/atoms'

import useRecoilState from 'hooks/useRecoilState'

function MainLayoutWrapperToolbarShadow (props) {
  const { breakpoint } = props

  const [scrolled, setScrolled] = React.useState(false)

  const [isShadow, setToolbarShadow] = useRecoilState(toolbarShadowAtom)

  const handleScrollSet = React.useCallback(
    (windowScroll) => setScrolled(windowScroll.y),
    []
  )

  React.useEffect(() => {
    if (scrolled && (!breakpoint || scrolled < breakpoint)) {
      if (!isShadow) {
        setToolbarShadow(true)
      }
    } else {
      if (isShadow) {
        setToolbarShadow(false)
      }
    }
  }, [scrolled])

  React.useEffect(() => {
    return () => { isShadow && setToolbarShadow(false) }
  }, [isShadow])

  return <WindowScroll onWindowScroll={handleScrollSet} />
}

MainLayoutWrapperToolbarShadow.propTypes = {
  breakpoint: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ])
}

MainLayoutWrapperToolbarShadow.defaultProps = {
  breakpoint: false
}

export default React.memo(MainLayoutWrapperToolbarShadow)
