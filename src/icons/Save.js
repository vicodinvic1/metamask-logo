import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function SaveIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='22'
      viewBox='0 0 448 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M433.941 129.941l-83.882-83.882A48 48 0 00316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 00-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 017.432 4.195l83.882 83.882A15.895 15.895 0 01416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z'
      />
    </svg>
  )
}

export default withDefaultColor('background.paper')(SaveIcon)
