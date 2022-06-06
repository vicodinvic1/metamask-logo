import { useState } from 'react'

export default function useCurrentTarget (defaultAnchor = null) {
  const [currentTarget, setCurrentTarget] = useState(defaultAnchor)

  const set = (e) => { setCurrentTarget(e.currentTarget) }
  const reset = () => { setCurrentTarget(null) }
  const toggle = (e) => currentTarget ? reset() : set(e)

  return [currentTarget, set, reset, toggle]
}
