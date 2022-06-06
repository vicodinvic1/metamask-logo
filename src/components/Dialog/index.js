import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'
import MUIDialog from '@mui/material/Dialog'

import IconButton from 'components/Button/Icon'

import CrossIcon from 'icons/Cross'

import { closeDialog } from 'actions/dialog'

import useClasses from 'hooks/useClasses'
import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

import styles from './styles'

function Dialog (props) {
  const {
    children,
    className,
    closeButtonClassName,
    name,
    onClose,
    open,
    onMount,
    onUnmount,
    ...restProps
  } = props

  const classes = useClasses(styles)
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)

  const isOpen = (typeof open === 'undefined')
    ? name === dialog
    : open

  const handleDefaultClose = React.useCallback(
    () => dispatch(closeDialog()),
    []
  )

  const handleClose = React.useCallback(
    (e, reason) =>
    // if (reason !== 'backdropClick') {
      onClose
        ? onClose(e, reason)
        : handleDefaultClose(),
    []
    // }
  )

  React.useEffect(() => {
    if (onMount && isOpen) {
      onMount()
    }

    if (onUnmount && !isOpen) {
      return () => { onUnmount() }
    }
  }, [isOpen])

  return (
    <MUIDialog
      {...restProps}
      classes={{ paper: cx(classes.root, className) }}
      onClose={handleClose}
      open={isOpen}
    >
      <IconButton
        className={cx(classes.closeButton, closeButtonClassName)}
        onClick={handleClose}
      >
        <CrossIcon />
      </IconButton>

      {children}
    </MUIDialog>
  )
}

Dialog.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  open: PropTypes.bool
}

export default Dialog
