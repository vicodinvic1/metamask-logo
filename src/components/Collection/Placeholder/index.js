import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import Box from 'components/Box'
import Button from 'components/Button'
import Typography from 'components/Typography'

import { hasObjValues } from 'lib/object'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function CollectionPlaceholder (props) {
  const {
    buttonLabel,
    className,
    centered,
    subtitle,
    icon,
    iconAutoSize,
    iconClassName,
    onClick,
    subtitleClassName,
    title,
    to,
    filter,
    withTopIndent,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    centered && classes.centered,
    withTopIndent && classes.withTopIndent,
    className
  )

  const iconClasses = cx(
    classes.icon,
    iconAutoSize && classes.iconAutoSize,
    iconClassName
  )

  const subtitleClasses = cx(
    classes.subtitle,
    subtitleClassName
  )

  const showSubtitle = subtitle && hasObjValues(filter)

  return (
    <Box className={rootClassName} {...restProps}>
      {icon && (
        <div className={iconClasses}>
          {icon}
        </div>
      )}

      <Typography variant='h3' className={classes.title}>
        {title}
      </Typography>

      {showSubtitle && (
        <Typography variant='h4' className={subtitleClasses}>
          {subtitle}
        </Typography>
      )}

      {(onClick || to) && (
        <Button
          onClick={onClick}
          to={to}
          color='secondary'
        >
          {buttonLabel}
        </Button>
      )}

    </Box>
  )
}

CollectionPlaceholder.propTypes = {
  buttonLabel: PropTypes.string,
  centered: PropTypes.bool,
  iconAutoSize: PropTypes.bool,
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  withTopIndent: PropTypes.bool
}

CollectionPlaceholder.defaultProps = {
  centered: false,
  iconAutoSize: false,
  withTopIndent: false
}

export default CollectionPlaceholder
