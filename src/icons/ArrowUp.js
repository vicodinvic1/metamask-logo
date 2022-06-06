import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function ArrowUpIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 256 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.pale')(ArrowUpIcon)
