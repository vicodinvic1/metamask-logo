import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function ArrowRightIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...restProps}
    >
      <path
        fill={color}
        fillRule='evenodd'
        d='M8 7.5L9.5 6l6.5 6.5L9.5 19 8 17.5l5-5z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.main')(ArrowRightIcon)
