import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function TrashIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='20'
      viewBox='0 0 448 512'
      {...restProps}
    >
      <path
        fill={color}
        fillRule='evenodd'
        d='M432 80h-82.4l-34-56.7A48 48 0 00274.4 0H173.6a48 48 0 00-41.2 23.3L98.4 80H16A16 16 0 000 96v16a16 16 0 0016 16h16l21.2 339a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z'
      />
    </svg>
  )
}

export default withDefaultColor('color.red.main')(TrashIcon)
