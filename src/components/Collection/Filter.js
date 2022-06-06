import React from 'react'
import PropTypes from 'prop-types'

import {
  CollectionStateContext,
  CollectionHandlersContext
} from 'components/Collection/context'

import FilterForm from 'forms/Filter'

function CollectionFilter (props) {
  const { form: Form, withSkipOnInit, ...restProps } = props

  const handlers = React.useContext(CollectionHandlersContext)
  const state = React.useContext(CollectionStateContext)

  const [init, setInit] = React.useState(false)

  const handleChange = (fields) => {
    if (withSkipOnInit) {
      if (init) {
        return handlers.handleFilterChange(fields)
      } else {
        return setInit(true)
      }
    }

    return handlers.handleFilterChange(fields)
  }

  const FormProps = {
    onSubmit: handlers.handleFilterChange,
    onChange: handleChange,
    initialValues: { filter: state.variables?.filter },
    ...restProps
  }

  return <Form {...FormProps} />
}

CollectionFilter.propTypes = {
  form: PropTypes.any.isRequired
}

CollectionFilter.defaultProps = {
  form: FilterForm
}

export default CollectionFilter
