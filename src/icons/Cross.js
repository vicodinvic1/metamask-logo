import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CrossIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      {...restProps}
    >
      <path
        fill={color}
        d='M.293.293a1 1 0 011.414 0L7 5.585 12.293.293a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L8.415 7l5.292 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L7 8.415l-5.293 5.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L5.585 7 .293 1.707A1 1 0 01.21.387z'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.main')(CrossIcon)
