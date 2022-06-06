import React from 'react'
import compose from 'recompose/compose'

import withDefaultColor from 'hoc/withDefaultColor'

function CloseSidebar (props) {
  const { accentColor, color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      {...restProps}
    >
      <g fill='none' fillRule='evenodd'>
        <path
          fill={color}
          fillOpacity='0.5'
          d='M2 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V2a2 2 0 00-2-2z'
        />

        <path
          fill={accentColor}
          fillOpacity='0.8'
          d='M9 2a1 1 0 00-1 1v8a1 1 0 002 0V3a1 1 0 00-1-1z'
        />
      </g>
    </svg>
  )
}

export default compose(
  withDefaultColor('secondary.disabled'),
  withDefaultColor('primary.main', { as: 'accentColor' })
)(CloseSidebar)
