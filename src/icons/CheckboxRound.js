import React from 'react'
import withDefaultColor from 'hoc/withDefaultColor'

function CheckboxRoundIcon (props) {
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
      <circle cx='12' cy='12' r='9.5' stroke={color} strokeWidth='2' />
    </svg>
  )
}

export default withDefaultColor('primary.main')(CheckboxRoundIcon)
