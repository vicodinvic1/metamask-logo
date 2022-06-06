import React from 'react'
import PropTypes from 'prop-types'

import FormField from 'components/Form/Field'
import FormInputSearch from 'components/Form/Input/Search'
import Tabs from 'components/Tabs'
import Tab from 'components/Tab'

import { FILTER_FORM } from 'constants/forms'

import { getFormValues } from 'selectors/form'

import useClasses from 'hooks/useClasses'
import useSelector from 'hooks/useSelector'

import styles from './styles'
import FilterTab from './Tab'

const SEARCH_TAB = 'search'

function FilterTabs (props) {
  const { filters, searchPlaceholder, withSearch } = props

  const classes = useClasses(styles)

  const INITIAL_TAB = withSearch
    ? SEARCH_TAB
    : filters[0].name

  const [tab, setTab] = React.useState(INITIAL_TAB)

  const formSelector = getFormValues(FILTER_FORM)
  const formValues = useSelector(formSelector)

  const currentFilter = React.useMemo(
    () => formValues?.filter || {},
    [formValues?.filter]
  )

  const handleTabChange = React.useCallback(
    (_, tab) => setTab(tab),
    []
  )

  return (
    <div className={classes.root}>
      <Tabs
        classes={{ scrollButtons: classes.scrollButtons }}
        onChange={handleTabChange}
        value={tab}
        variant='scrollable'
        TabScrollButtonProps={{ disableRipple: true }}
      >
        {withSearch && (
          <Tab
            className={classes.tab}
            component='div'
            disableRipple
            value={SEARCH_TAB}
            label={
              <div className={classes.fieldWrapper}>
                <FormField
                  component={FormInputSearch}
                  name='search'
                  placeholder={searchPlaceholder}
                />
              </div>
            }
          />
        )}

        {filters?.map((filter) => (
          <FilterTab
            classes={classes}
            currentFilter={currentFilter}
            filter={filter}
            key={filter.name}
            value={filter.name}
          />
        ))}
      </Tabs>
    </div>
  )
}

FilterTabs.propTypes = {
  filters: PropTypes.array,
  withSearch: PropTypes.bool
}

FilterTabs.defaultProps = {
  withSearch: true
}

export default FilterTabs
