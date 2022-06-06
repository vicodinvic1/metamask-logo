import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function TriggerIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='24'
      fill='none'
      viewBox='0 0 18 20'
      {...restProps}
    >
      <path
        fill={color}
        d='M12.685 3.268h.13l.018-.13c.051-.358.156-.7.306-1.015l.102-.214H4.176A3.326 3.326 0 00.85 5.235v10.588a3.326 3.326 0 003.326 3.327h10.589a3.326 3.326 0 003.326-3.326V6.758l-.214.102a3.53 3.53 0 01-1.016.306l-.129.018v8.638c0 1.087-.88 1.968-1.967 1.968H4.176a1.968 1.968 0 01-1.967-1.968V5.236c0-1.086.88-1.967 1.967-1.967h8.509z'
      />

      <path
        stroke={color}
        strokeWidth='0.3'
        d='M12.685 3.268h.13l.018-.13c.051-.358.156-.7.306-1.015l.102-.214H4.176A3.326 3.326 0 00.85 5.235v10.588a3.326 3.326 0 003.326 3.327h10.589a3.326 3.326 0 003.326-3.326V6.758l-.214.102a3.53 3.53 0 01-1.016.306l-.129.018v8.638c0 1.087-.88 1.968-1.967 1.968H4.176a1.968 1.968 0 01-1.967-1.968V5.236c0-1.086.88-1.967 1.967-1.967h8.509z'
      />

      <path
        fill={color}
        d='M19.15 3.645a2.795 2.795 0 10-5.59 0 2.795 2.795 0 005.59 0z'
      />

      <g strokeWidth='0.3'>
        <path
          stroke={color}
          d='M19.15 3.645a2.795 2.795 0 10-5.59 0 2.795 2.795 0 005.59 0z'
        />
      </g>
    </svg>
  )
}

export default withDefaultColor('primary.main')(TriggerIcon)
