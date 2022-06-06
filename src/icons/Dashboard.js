import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function DashboardIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='16'
      fill='none'
      viewBox='0 0 24 16'
      {...restProps}
    >
      <path
        stroke={color}
        d='M16.4 3.018l-.44-.847-.445.844-6.292 11.91a.53.53 0 01-.948-.023L4.681 7.265l-.255-.542-.488.348-2.6 1.857a.53.53 0 01-.74-.123l-.406.29.407-.29a.53.53 0 01.123-.74l3.605-2.574a.53.53 0 01.787.205l3.241 6.888.427.906.468-.886L15.495.783a.53.53 0 01.94.003l2.672 5.141.328.63.482-.52 2.353-2.534a.53.53 0 11.777.72L19.7 7.829a.53.53 0 01-.859-.116l-2.44-4.694z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(DashboardIcon)
