import React from 'react'
import withDefaultColor from 'hoc/withDefaultColor'

function CheckboxIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      {...restProps}
    >
      <rect
        width='22'
        height='22'
        x='1'
        y='1'
        stroke={color}
        strokeWidth='2'
        rx='4'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(CheckboxIcon)
