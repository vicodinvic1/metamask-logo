import React from 'react'
import compose from 'recompose/compose'

import withDefaultColor from 'hoc/withDefaultColor'

function CameraIcon (props) {
  const { accentColor, color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...restProps}
    >
      <g fillRule='evenodd' clipRule='evenodd'>
        <path fill={accentColor} d='M16.5 8L18 9.5 11.5 16 5 9.5 6.5 8l5 5z' />
        <path
          fill={color}
          fillOpacity='0.25'
          d='M16.5 8L18 9.5 11.5 16 5 9.5 6.5 8l5 5z'
        />
      </g>
    </svg>
  )
}

export default compose(
  withDefaultColor('background.paper'),
  withDefaultColor('secondary.main', { as: 'accentColor' })
)(CameraIcon)
