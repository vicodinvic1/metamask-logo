import { useEffect } from 'react'
import { toolbarShadowBreakpoint as toolbarShadowBreakpointAtom } from 'constants/atoms'

import useSetRecoilState from 'hooks/useSetRecoilState'

export default function useSetToolbarShadowBreakpoint (ref) {
  const setToolbarShadowBreakpoint = useSetRecoilState(toolbarShadowBreakpointAtom)

  useEffect(() => {
    if (ref.current) {
      setToolbarShadowBreakpoint(ref.current.offsetTop)
    }

    return () => { setToolbarShadowBreakpoint(null) }
  }, [ref.current])
}
