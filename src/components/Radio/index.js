import React from 'react'
import MuiRadio from '@mui/material/Radio'

import RadioIcon from 'icons/Radio'

import useTheme from 'hooks/useTheme'

function Radio (props) {
  const { checkedColor, ...restProps } = props

  const theme = useTheme()

  const radioCheckedColor = props.checked && props.disabled
    ? theme.palette.primary.disabled
    : checkedColor || theme.palette.primary.main

  return (
    <MuiRadio
      {...restProps}
      disableRipple
      icon={<RadioIcon />}
      checkedIcon={<RadioIcon checked color={radioCheckedColor} />}
    />
  )
}

Radio.defaultProps = {
  color: 'primary'
}

export default Radio
