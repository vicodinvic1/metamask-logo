import React from 'react'
import PropTypes from 'prop-types'
import { isPristine, isSubmitting } from 'redux-form'

import Button from 'components/Button'
import ButtonText from 'components/Button/Text'

import { submitForm } from 'actions/form'

import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

function SubmitButton (props) {
  const {
    children,
    disabled,
    formName,
    icon,
    onClick,
    size,
    ...restProps
  } = props

  const dispatch = useDispatch()

  const pristine = useSelector(state => isPristine(formName)(state))
  const submitting = useSelector(state => isSubmitting(formName)(state))

  const handleSubmit = React.useCallback(
    () => dispatch(submitForm(formName)),
    []
  )

  const disabledState = submitting || (
    typeof disabled === 'undefined'
      ? pristine
      : disabled
  )

  const ButtonProps = {
    icon,
    disabled: disabledState,
    onClick: onClick || handleSubmit,
    size: size || 'large',
    ...restProps
  }

  const Component = icon ? ButtonText : Button

  return (
    <Component {...ButtonProps}>
      {children}
    </Component>
  )
}

SubmitButton.propTypes = {
  formName: PropTypes.string.isRequired
}

export default SubmitButton
