import React from 'react'
import ReactCountUp from 'react-countup'

function CountUp (props) {
  const { value, ...restProps } = props

  return (
    <ReactCountUp
      duration={value > 1
        ? 0.6
        : 0}
      end={value}
      {...restProps}
    />
  )
}

export default CountUp
