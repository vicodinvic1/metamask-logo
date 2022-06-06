import { reduxForm } from 'redux-form'
import set from 'object-set'

export default function withForm (options) {
  const {
    action,
    initialValues,
    schema,
    cast,
    ...restOptions
  } = options

  const reduxFormOptions = { ...restOptions }

  const castFields = fields => cast ? cast(fields) : fields

  if (action) {
    reduxFormOptions.onSubmit = (fields, dispatch) =>
      dispatch(action(castFields(fields)))
  }

  if (schema) {
    reduxFormOptions.shouldAsyncValidate = () => true
    reduxFormOptions.asyncValidate = asyncValidate(schema)
    reduxFormOptions.initialValues = schema.cast(options.initialValues)
  }

  return reduxForm(reduxFormOptions)
}

const asyncValidate = schema => values =>
  schema
    .validate(values, { abortEarly: false })
    .then(() => { })
    .catch((errors) => {
      const formErrors = {}

      errors.inner.forEach((error) => {
        set(formErrors, error.path, error.message)
      })

      throw formErrors
    })
