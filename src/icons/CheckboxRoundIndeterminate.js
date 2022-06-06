import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CheckboxRoundIndeterminateIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      viewBox='0 0 22 22'
      {...restProps}
    >
      <g fill='none' fillRule='evenodd'>
        <circle
          cx='11'
          cy='11'
          r='11'
          fill={color}
          fillRule='nonzero'
        />
        <g stroke='#fff' strokeLinecap='square'>
          <path d='M5.5 11.5h11M5.5 10.5h11' />
        </g>
      </g>
    </svg>
  )
}

export default withDefaultColor('primary.main')(CheckboxRoundIndeterminateIcon)
