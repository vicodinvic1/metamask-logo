import React from 'react'

import Button from 'components/Button'
import Typography from 'components/Typography'

import * as routes from 'constants/routes'

import useClasses from 'hooks/useClasses'
import useCurrentUser from 'hooks/useCurrentUser'

import styles from './styles'

function NotFoundPage (props) {
  const classes = useClasses(styles, props.inverted)
  const currentUser = useCurrentUser()

  return (
    <div className={classes.root}>
      <div className={classes.error}>
        404
      </div>

      <Typography className={classes.title} variant='h1'>
        page not found
      </Typography>

      <Button size='large' to='/'>
        Back to homepage
      </Button>
    </div>
  )
}

export default NotFoundPage
