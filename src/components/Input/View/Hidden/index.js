import React from 'react'

import ButtonIcon from 'components/Button/Icon'
import InputView from 'components/Input/View'

import EyeIcon from 'icons/Eye'
import EyeOffIcon from 'icons/EyeOff'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const PASSWORD_TYPE = 'password'
const TEXT_TYPE = 'text'

function HiddenInputView (props) {
  const classes = useClasses(styles)

  const [type, setType] = React.useState(PASSWORD_TYPE)

  const handleButtonClick = React.useCallback(
    () => setType(type => type === TEXT_TYPE
      ? PASSWORD_TYPE
      : TEXT_TYPE),
    []
  )

  return (
    <InputView {...props} type={type}>
      <ButtonIcon className={classes.button} onClick={handleButtonClick}>
        {type === PASSWORD_TYPE
          ? <EyeOffIcon />
          : <EyeIcon />}
      </ButtonIcon>
    </InputView>
  )
}

export default HiddenInputView
