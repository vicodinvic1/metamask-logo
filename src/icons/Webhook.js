import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function WebhookIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='22'
      viewBox='0 0 640 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M513.6 202.8l-19.2-25.6-48 36 19.2 25.6 48-36zM576 192c13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 153.6 640 141.3 640 128c0-13.3-4-25.6-10.9-35.8-2.3-3.4-4.9-6.6-7.8-9.5-2.9-2.9-6.1-5.5-9.5-7.8C601.6 68 589.3 64 576 64s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C516 102.4 512 114.7 512 128c0 35.3 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM99.8 250.9C89.6 244 77.3 240 64 240s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C4 278.4 0 290.7 0 304c0 35.3 28.7 64 64 64s64-28.7 64-64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3zM64 336c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm88-16h48v-32h-48v32zm469.3 82.7c-2.9-2.9-6.1-5.5-9.5-7.8C601.6 388 589.3 384 576 384s-25.6 4-35.8 10.9c-3.3 2.2-6.3 4.7-9.1 7.5l-91.8-55.1c5.6-13.3 8.7-28 8.7-43.3 0-61.9-50.1-112-112-112-11.3 0-21.9 2.2-32.2 5.2l-39.3-84.1C278.8 101.4 288 83.9 288 64c0-13.3-4-25.6-10.9-35.8-4.6-6.8-10.5-12.7-17.3-17.3C249.6 4 237.3 0 224 0s-25.6 4-35.8 10.9c-6.8 4.6-12.7 10.5-17.3 17.3C164 38.4 160 50.7 160 64c0 35.3 28.7 64 64 64 4 0 7.9-.5 11.7-1.2l39 83.6c-30.5 20-50.7 54.4-50.7 93.6 0 61.9 50.1 112 112 112 35 0 65.8-16.4 86.4-41.5l92.4 55.4c-1.7 5.8-2.7 11.8-2.7 18.1 0 35.3 28.7 64 64 64 13.3 0 25.6-4 35.8-10.9 6.8-4.6 12.7-10.5 17.3-17.3C636 473.6 640 461.3 640 448c0-13.3-4-25.6-10.9-35.8-2.3-3.4-5-6.6-7.8-9.5zM224 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm112 288c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm240 96c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(WebhookIcon)
