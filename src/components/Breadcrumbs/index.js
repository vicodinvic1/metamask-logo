import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Link from 'components/Link'

import ArrowRightIcon from 'icons/ArrowRight'

import { isArray } from 'lib/array'
import { joinPath } from 'lib/url'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Breadcrumbs (props) {
  const { breadcrumbs, className } = props

  const classes = useClasses(styles)

  const renderBreadcrumb = (breadcrumb, i) => {
    const isLast = i === breadcrumbs.length - 1

    const className = cx(
      classes.breadcrumb,
      isLast && classes.last
    )

    const to = isArray(breadcrumb.path)
      ? joinPath(breadcrumb.path)
      : breadcrumb.path

    const Breadcrumb = isLast ? 'div' : Link
    const BreadcrumbProps = { className }

    if (!isLast) {
      BreadcrumbProps.to = to
    }

    if (breadcrumb.onClick) {
      BreadcrumbProps.to = undefined
      BreadcrumbProps.onClick = breadcrumb.onClick
    }

    return (
      <div className={classes.container} key={i}>
        <Breadcrumb {...BreadcrumbProps}>
          {breadcrumb.label}
        </Breadcrumb>

        {!isLast && (
          <ArrowRightIcon className={classes.arrow} />
        )}
      </div>
    )
  }

  return (
    <div className={cx(classes.root, className)}>
      {breadcrumbs.map(renderBreadcrumb)}
    </div>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
}

export default Breadcrumbs
