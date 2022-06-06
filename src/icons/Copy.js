import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CopyIcon (props) {
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
        d='M433.941 65.941l-51.882-51.882A48 48 0 00348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 00-14.059-33.941zM352 32.491a15.88 15.88 0 017.431 4.195l51.882 51.883A15.885 15.885 0 01415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z'
      />
    </svg>
  )
}

export default withDefaultColor('secondary.main')(CopyIcon)
