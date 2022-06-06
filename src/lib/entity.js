import { schema as Schema } from 'normalizr'
import pluralize from 'pluralize'
import merge from 'lodash/merge'
import omit from 'lodash/omit'
import get from 'lodash/get'

export function isArraySchema (schema) {
  return schema instanceof Schema.Array
}

export function resolveSchemaKey (schema) {
  return isArraySchema(schema)
    ? schema.schema.key
    : schema.key
}

export function resolveResponseKey (schema) {
  const schemaKey = resolveSchemaKey(schema)

  return isArraySchema(schema)
    ? schemaKey
    : pluralize.singular(schemaKey)
}

const extractSchema = action => action?.meta?.schema

export function isEntityAction (schemaKey, action) {
  const schema = extractSchema(action.meta?.previousAction)

  return action.payload?.entities?.[schemaKey] ||
    (schema && schemaKey === resolveSchemaKey(schema))
}

export function createDeleteEntityFromState (entityKey) {
  return (state, action) => {
    // If API returns deleted entity on DELETE request
    if (action.payload?.entities?.[entityKey]) {
      return omit(state, action.payload.result)
    }

    return isEntityAction(entityKey, action)
      ? omit(state, action.meta.previousAction.payload.id)
      : state
  }
}

export function createUpdateEntityInState (entityKey) {
  return (state, action) => {
    // If API returns updated entity on PATCH request
    if (action.payload?.entities?.[entityKey]) {
      return merge({}, state, action.payload.entities[entityKey])
    }

    // If API doesn't return updated entity on PATCH request
    // Take data and id from previous action
    if (isEntityAction(entityKey, action)) {
      const nextState = { ...state }

      const { id, request } = action.meta.previousAction.payload

      const entity = nextState[id]

      nextState[id] = { ...entity, ...request.data }

      return nextState
    }

    return state
  }
}

export function createAddEntityToState (entityKey) {
  return (state, action) => {
    return action.payload.entities[entityKey]
      ? merge({}, state, action.payload.entities[entityKey])
      : state
  }
}

export function createReplaceEntitiesInState (entityKey) {
  return (state, action) => {
    return action.payload.entities[entityKey]
      ? action.payload.entities[entityKey]
      : state
  }
}

export function createAddEntitiesToState (entityKey) {
  return (state, action) => {
    return action.payload.entities[entityKey]
      ? merge({}, state, action.payload.entities[entityKey])
      : state
  }
}

export function createEntityUpdate (key) {
  return (state, action) => {
    const nextState = { ...state }

    const { id } = action.meta.previousAction.payload
    const { data } = action.payload

    const entity = nextState[id]

    nextState[id] = merge({}, entity, { id, [key]: data })

    return nextState
  }
}

const DEFAULT_ID_KEY = 'id'

export function createAddNewEntityToState (entityKey, options = {}) {
  return (state, action) => {
    if (action.payload.entities[entityKey]) {
      const { idKey, idKeyPath } = options
      const responseEntity = Object.values(action.payload.entities[entityKey])[0]
      const id = get(responseEntity, idKeyPath || DEFAULT_ID_KEY)
      const prevActionPayload = action.meta.previousAction.payload
      const _idKey = idKey || DEFAULT_ID_KEY

      return merge(
        {},
        state,
        {
          [id]: {
            [_idKey]: id,
            ...prevActionPayload.request.data,
            ...(prevActionPayload.dataToMerge || {})
          }
        }
      )
    }

    return state
  }
}
