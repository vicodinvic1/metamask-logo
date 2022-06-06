import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function DotsIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...restProps}
    >
      <circle fill={color} cx='11.5' cy='5.5' r='1.5' />
      <circle fill={color} cx='11.5' cy='11.5' r='1.5' />
      <circle fill={color} cx='11.5' cy='17.5' r='1.5' />
    </svg>
  )
}

export default withDefaultColor('secondary.main')(DotsIcon)
