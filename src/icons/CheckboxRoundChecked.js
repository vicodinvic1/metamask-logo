import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CheckboxRoundCheckedIcon (props) {
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
      <circle cx='12' cy='12' r='11' fill={color} />
      <path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16.5 9l-6.188 6.75L7.5 12.682' />
    </svg>
  )
}

export default withDefaultColor('primary.main')(CheckboxRoundCheckedIcon)
