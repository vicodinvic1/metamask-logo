import React from 'react'
import titleize from 'titleize'
import PropTypes from 'prop-types'

import Chip from 'components/Chip'
import Typography from 'components/Typography'
import PooperTooltip from 'components/Popper/Tooltip'

import InfoIcon from 'icons/Info'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function UserPermissionsTooltip (props) {
  const { permissions, icon, ...restProps } = props

  const classes = useClasses(styles)

  return (
    <PooperTooltip
      className={classes.root}
      title={icon || <InfoIcon />}
      placement='right'
      offsetX={5}
      offsetY={-5}
      {...restProps}
    >
      <Typography className={classes.title} variant='subtitle2'>
        User is able to:
      </Typography>

      <div className={classes.readWrapper}>
        <Chip
          className={classes.readChip}
          label='View'
        />

        <p>
          {renderPermissionLabels(permissions.canRead)}
        </p>
      </div>

      <div className={classes.manageWrapper}>
        <Chip
          className={classes.manageChip}
          label='Create, modify, and delete'
        />

        <p>
          {renderPermissionLabels(permissions.canManage)}
        </p>
      </div>
    </PooperTooltip>
  )
}

function renderPermissionLabels (permissions) {
  return permissions.map((permission, i) => {
    const label = titleize(permission)

    return i < permissions.length - 1
      ? label + ', '
      : label + '.'
  })
}

UserPermissionsTooltip.propTypes = {
  permissions: PropTypes.shape({
    canRead: PropTypes.array.isRequired,
    canManage: PropTypes.array.isRequired
  }).isRequired
}

export default UserPermissionsTooltip
