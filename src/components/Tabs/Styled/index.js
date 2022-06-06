import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import Tabs from 'components/Tabs'
import Tab from 'components/Tab'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function StyledTabs (props) {
  const {
    className,
    styled,
    tabClasses,
    tabs,
    variant,
    highlightedTabs,
    ...restProps
  } = props

  const scrollable = variant === 'scrollable'

  const classes = useClasses(styles, scrollable)

  const rootClassName = cx(
    styled && classes.styled,
    className
  )

  const tabClassName = cx(
    styled && classes.styledTab
  )

  const selectedTabClassName = cx(
    styled && classes.styledSelectedTab
  )

  return (
    <Tabs
      {...restProps}
      variant={variant}
      className={rootClassName}
    >
      {tabs.map(({ label }, i) => {
        const highlighted = highlightedTabs &&
          !!~highlightedTabs.indexOf(i)
        const tabClasses = cx(
          tabClassName,
          highlighted && classes.highlightedTab
        )
        const selectedClasses = cx(
          selectedTabClassName,
          highlighted && classes.highlightedSelectedTab
        )

        return (
          <Tab
            label={label}
            classes={{
              root: tabClasses,
              selected: selectedClasses,
              ...tabClasses
            }}
            key={i}
          />
        )
      })}
    </Tabs>
  )
}

StyledTabs.propTypes = {
  styled: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string
    })
  ).isRequired
}

StyledTabs.defaultProps = {
  styled: true
}

export default StyledTabs
