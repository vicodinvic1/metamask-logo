import { normalize } from 'normalizr'

import { isArraySchema } from 'lib/entity'

const extractSchema = action => action?.meta?.schema

export default store => next => action => {
  const previousAction = action.meta?.previousAction

  const schema = extractSchema(action) || extractSchema(previousAction)

  if (schema && action.payload.data && !action.error) {
    const isPages = isArraySchema(schema) && action.payload.data.content

    let data
    let meta

    if (isPages) {
      const { content, ...responseMeta } = action.payload.data

      data = content
      meta = responseMeta
    } else {
      data = action.payload.data
      meta = action.meta
    }

    action = {
      ...action,
      payload: normalize(data, schema),
      meta
    }
  }

  return next(action)
}
