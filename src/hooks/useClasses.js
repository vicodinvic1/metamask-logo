import { useMemo } from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

export default function useClasses (stylesElement, props) {
  const theme = useTheme()

  return useMemo(() => {
    const rawClasses = typeof stylesElement === 'function'
      ? stylesElement(theme, props)
      : stylesElement
    const prepared = {}

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value, { label: key })
    })

    return prepared
  }, [props])
}
