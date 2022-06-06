import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import ButtonBase from 'components/Button/Base'

import { notifySuccess } from 'actions/notification'

import useClasses from 'hooks/useClasses'
import useDispatch from 'hooks/useDispatch'

import styles from './styles'

const LARGE_SIZE = 'large'
const MEDIUM_SIZE = 'medium'
const AUTO_SIZE = 'auto'

const SIZES = [AUTO_SIZE, MEDIUM_SIZE, LARGE_SIZE]

function CopyButton (props) {
  const {
    children,
    className,
    copyText,
    message,
    onClick,
    size,
    ...restProps
  } = props

  const classes = useClasses(styles)
  const dispatch = useDispatch()

  const handleClick = React.useCallback(
    () => {
      navigator.clipboard.writeText(copyText)
      dispatch(notifySuccess(message))
    },
    []
  )

  const rootClassName = cx(
    classes.root,
    classes[`${size}Size`],
    className
  )

  return (
    <ButtonBase className={rootClassName} onClick={handleClick} {...restProps}>
      {children}
    </ButtonBase>
  )
}

CopyButton.propTypes = {
  copyText: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SIZES)
}

CopyButton.defaultProps = {
  size: AUTO_SIZE
}

export default CopyButton
