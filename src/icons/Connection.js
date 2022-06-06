import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function ConnectionIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 512 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M505.24 178.49l-47.7-95.41a63.972 63.972 0 00-28.62-28.62l-95.41-47.7A63.905 63.905 0 00304.89 0h-97.78c-9.94 0-19.73 2.31-28.62 6.76l-95.41 47.7a63.972 63.972 0 00-28.62 28.62l-47.7 95.41A63.874 63.874 0 000 207.11v97.78c0 9.94 2.31 19.73 6.76 28.62l47.7 95.41a63.972 63.972 0 0028.62 28.62l95.41 47.7a64.07 64.07 0 0028.62 6.76h97.78c9.94 0 19.73-2.31 28.62-6.76l95.41-47.7a63.972 63.972 0 0028.62-28.62l47.7-95.41a64.07 64.07 0 006.76-28.62v-97.78c0-9.94-2.31-19.74-6.76-28.62zm-29.55 12.44l-95.58 109.23L272 246.11V140.22l156.94-42.8 46.75 93.51zM308.8 480H203.2l-55.29-152.06L256 273.89l108.09 54.05L308.8 480zM199.55 32h112.89l82.85 41.42L256 111.41 116.71 73.42 199.55 32zM83.06 97.42L240 140.22V246.1l-108.11 54.05-95.58-109.22 46.75-93.51zM32 312.45v-77.88l81.99 93.7 48.42 133.16-74.56-37.28L32 312.45zm392.15 111.7l-74.56 37.28 48.42-133.16 81.99-93.7v77.88l-55.85 111.7z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(ConnectionIcon)
