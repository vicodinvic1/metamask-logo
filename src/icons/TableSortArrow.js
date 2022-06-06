import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function TableSortArrow (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='7'
      height='4'
      fill='none'
      viewBox='0 0 7 4'
      {...restProps}
    >
      <path fill={color} d='M3.5 4L.469 1H6.53L3.5 4z' />
    </svg>
  )
}

export default withDefaultColor('primary.main')(TableSortArrow)
