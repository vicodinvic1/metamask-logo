import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

// import Avatar from 'components/Avatar'

import { getUserAvatarText, getAvatarBackground } from 'lib/user'

import useClasses from 'hooks/useClasses'

import styles from './styles'

const SIZE_LARGE = 'large'
const SIZE_MEDIUM = 'medium'
const SIZE_SMALL = 'small'
const SIZES = [SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE]

function UserAvatar (props) {
  const {
    avatarClassName,
    className,
    size,
    user,
    ...restProps
  } = props

  const classes = useClasses(styles)

  // const image = user?.picture

  const rootClassName = cx(classes.root, className)
  const altAvatarClassName = cx(classes.altAvatar, classes[size])

  return (
    <div className={rootClassName} {...restProps}>
      {/* {image
      ? (
        <Avatar
          className={classes[size]}
          src={image}
        />
        )
      : ( */}
      <div
        className={altAvatarClassName}
        style={{ backgroundColor: getAvatarBackground(user) }}
      >
        {getUserAvatarText(user)}
      </div>
      {/* )} */}
    </div>
  )
}

UserAvatar.propTypes = {
  size: PropTypes.oneOf(SIZES)
}

UserAvatar.defaultProps = {
  size: SIZE_SMALL
}

export default UserAvatar
