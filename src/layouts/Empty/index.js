import React from 'react'
import PropTypes from 'prop-types'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function EmptyLayout (props) {
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      <div className={classes.children}>
        {props.children}
      </div>
    </div>
  )
}

EmptyLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default EmptyLayout
