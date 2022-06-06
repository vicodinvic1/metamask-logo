import React from 'react'
import { cx } from '@emotion/css'
import MuiCheckbox from '@mui/material/Checkbox'

import CheckboxCheckedIcon from 'icons/CheckboxChecked'
import CheckboxIcon from 'icons/Checkbox'
import CheckboxIndeterminateIcon from 'icons/CheckboxIndeterminate'

import useTheme from 'hooks/useTheme'
import useClasses from 'hooks/useClasses'

import styles from './styles'

function Checkbox (props) {
  const { className, icon: Icon, checkedIcon: CheckedIcon } = props

  const classes = useClasses(styles)
  const theme = useTheme()

  const color = props.disabled
    ? theme.palette.primary.disabled
    : theme.palette.primary.main

  return (
    <MuiCheckbox
      {...props}
      classes={{ root: cx(classes.root, className) }}
      disableRipple
      icon={Icon || <CheckboxIcon color={color} />}
      indeterminateIcon={<CheckboxIndeterminateIcon />}
      checkedIcon={CheckedIcon || <CheckboxCheckedIcon color={color} />}
    />
  )
}

Checkbox.defaultProps = {
  color: 'primary'
}

export default Checkbox
