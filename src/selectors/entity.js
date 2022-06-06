import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'

export function createEntitiesSelector (props) {
  const { schema, ids } = props

  return createSelector(
    state => state[schema.schema.key],
    entities => Object.values(
      denormalize(
        ids || Object.keys(entities),
        schema,
        { [schema.schema.key]: entities }
      )
    ).filter(Boolean)
  )
}

export function createEntitySelector (props) {
  return state => {
    const { id, schema } = props
    const entity = state[schema.key][id]

    return denormalize(entity, schema, state)
  }
}

export function createSimpleEntitySelector (props) {
  return state => {
    const { id, schema } = props
    return state[schema.key][id]
  }
}
