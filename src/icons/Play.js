import React from 'react'
import withDefaultColor from 'hoc/withDefaultColor'

function PlayIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      fill='none'
      viewBox='0 0 512 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.disabled')(PlayIcon)
