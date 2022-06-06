import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import Dropzone from 'react-dropzone'

import FormControl from 'components/Form/Control'
import FormHelperText from 'components/Form/HelperText'
import ButtonIcon from 'components/Button/Icon'
import MenuItem from 'components/Menu/Item'
import Popover from 'components/Popover'
import UserAvatar from 'components/User/Avatar'

import CameraIcon from 'icons/Camera'

import { mapFileToObject } from 'lib/file'
// import { getUserAvatarText, getAvatarBackground } from 'lib/user'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ImageField (props) {
  const {
    className,
    input,
    meta,
    readOnly,
    label,
    user,
    ...restProps
  } = props

  const { file, picture } = input.value

  const classes = useClasses(styles)

  const [image, setImage] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (e) => { setAnchorEl(e.currentTarget) }
  const handlePopoverClose = () => { setAnchorEl(null) }

  const handleFileSelect = (acceptedFiles, rejectedFiles) => {
    mapFileToObject(acceptedFiles[0]).then(file => {
      input.onChange({ file })
    })
  }
  const handleImageButtonClick = open => (e) => image
    ? handlePopoverOpen(e)
    : open()

  const handleUploadButtonClick = open => () => {
    handlePopoverClose()
    open()
  }

  React.useEffect(() => {
    if (file) {
      setImage(file.data)
    } else if (picture) {
      setImage(picture)
    }
  }, [input.value])

  const helperText = (meta.touched && meta.error) || props.helperText
  const error = !!(meta.touched && meta.error)

  const rootClassName = cx(
    classes.root,
    className
  )

  const handleRemoveButtonClick = () => {
    handlePopoverClose()
    setImage(null)
    input.onChange({ destroy: true })
  }

  const openButtonClassName = cx(
    classes.openButton,
    anchorEl && classes.openButtonFocused
  )

  return (
    <FormControl
      className={rootClassName}
      error={error}
    >
      <Dropzone
        accept='image/*'
        multiple={false}
        onDrop={handleFileSelect}
        {...restProps}
      >
        {({ open, getRootProps, getInputProps }) => (
          <>
            <input {...getInputProps()} />

            <div className={classes.wrapper}>
              <div className={classes.imageContainer}>
                {/* {image
                  ? <img src={image} />
                  : ( */}
                <UserAvatar size='large' user={user} />
                {/* )} */}
              </div>

              {!readOnly && (
                <ButtonIcon
                  className={openButtonClassName}
                  onClick={handleImageButtonClick(open)}
                  {...getRootProps}
                >
                  <CameraIcon />
                </ButtonIcon>
              )}
            </div>

            <Popover
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              open={!!anchorEl}
              padding='none'
              anchorOrigin={{
                vertical: 0,
                horizontal: -10
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              className={classes.popover}
            >
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={handleUploadButtonClick(open)}
              >
                Upload image
              </MenuItem>

              <MenuItem
                classes={{ root: cx(classes.menuItem, classes.removeItem) }}
                onClick={handleRemoveButtonClick}
              >
                Remove avatar
              </MenuItem>
            </Popover>
          </>
        )}
      </Dropzone>

      {helperText && (
        <FormHelperText>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

ImageField.propTypes = {
  label: PropTypes.string,
  user: PropTypes.object.isRequired
}

export default ImageField
