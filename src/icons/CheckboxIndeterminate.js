import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CheckboxIndeterminateIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      {...restProps}
    >
      <rect width='22' height='22' x='1' y='1' fill={color} rx='4' />

      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M16.5 12h-9'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(CheckboxIndeterminateIcon)
