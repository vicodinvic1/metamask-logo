import React from 'react'
import PropTypes from 'prop-types'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ExternalLayout (props) {
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

ExternalLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default ExternalLayout
