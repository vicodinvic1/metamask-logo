import React from 'react'
import withDefaultColor from 'hoc/withDefaultColor'

function PauseIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      fill='none'
      viewBox='0 0 512 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.pale')(PauseIcon)
