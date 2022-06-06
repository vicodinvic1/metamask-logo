import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import Container from 'components/Container'

import useClasses from 'hooks/useClasses'

import MainLayoutToolbarPortal from './Portal'
import MainLayoutToolbarSecondaryPortal from './SecondaryPortal'
import styles from './styles'

const ROW_VARIANT = 'row'
const COLUMN_VARIANT = 'column'
const VARIANTS = [ROW_VARIANT, COLUMN_VARIANT]

const PRIMARY_LAYOUT = 'primary'
const SECONDARY_LAYOUT = 'secondary'
const LAYOUTS = [PRIMARY_LAYOUT, SECONDARY_LAYOUT]

function Toolbar (props) {
  const {
    children,
    childrenClassName,
    showPrimaryContent,
    primaryContent,
    secondaryContent,
    variant,
    layout
  } = props

  const classes = useClasses(styles)

  const showContent = primaryContent || secondaryContent

  const childrenClasses = cx(
    classes.children,
    classes[variant],
    childrenClassName
  )

  const Portal = layout === 'primary'
    ? MainLayoutToolbarPortal
    : MainLayoutToolbarSecondaryPortal

  return (
    <Portal>
      {children && (
        <div className={childrenClasses}>
          {children}
        </div>
      )}

      {showContent && (
        <Container>
          <div
            style={{
              position: showPrimaryContent ? 'static' : 'absolute', // Resolve of MuiTabs warn in the console (instead of using display: none; approach)
              left: showPrimaryContent ? 'unset' : -99999
            }}
          >
            {primaryContent}
          </div>

          <div
            style={{
              position: showPrimaryContent ? 'absolute' : 'static', // Resolve of MuiTabs warn in the console (instead of using display: none; approach)
              left: showPrimaryContent ? -99999 : 'unset'
            }}
          >
            {secondaryContent}
          </div>
        </Container>
      )}
    </Portal>
  )
}

Toolbar.propTypes = {
  primaryContent: PropTypes.node,
  secondaryContent: PropTypes.node,
  showPrimaryContent: PropTypes.bool,
  layout: PropTypes.oneOf(LAYOUTS),
  variant: PropTypes.oneOf(VARIANTS)
}

Toolbar.defaultProps = {
  showPrimaryContent: true,
  layout: PRIMARY_LAYOUT,
  variant: COLUMN_VARIANT
}

export default React.memo(Toolbar)
