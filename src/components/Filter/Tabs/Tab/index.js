import React from 'react'

import FormField from 'components/Form/Field'
import Tab from 'components/Tab'

function FilterTab (props) {
  const { classes, filter, currentFilter, ...restProps } = props
  const {
    children,
    createDisabledState,
    createSelectorFilter,
    createShouldRefetch,
    createSkipFetch,
    createVariables,
    name,
    type,
    ...restFilterProps
  } = filter

  const FilterProps = {}

  if (createVariables) {
    FilterProps.variables = createVariables(currentFilter)
    FilterProps.selectorFilterFn = createSelectorFilter(currentFilter)
  }

  if (createSkipFetch) {
    FilterProps.skipFetch = createSkipFetch(currentFilter)
  }

  if (createShouldRefetch) {
    FilterProps.shouldRefetch = createShouldRefetch(currentFilter)
  }

  if (createDisabledState) {
    FilterProps.disabled = createDisabledState(currentFilter)
  }

  return (
    <Tab
      className={classes.tab}
      disableRipple
      label={
        <div className={classes.fieldWrapper}>
          <FormField
            {...restFilterProps}
            {...FilterProps}
            name={name}
            className={classes[`${type}Field`]}
            margin='none'
          >
            {children}
          </FormField>
        </div>
      }
      {...restProps}
    />
  )
}

export default FilterTab
