import * as actionTypes from 'constants/actions'

import { joinPathById } from 'lib/url'

export function fetchEntity (payload) {
  const { endpoint, id, schema, ...request } = payload

  return {
    type: actionTypes.ENTITY_FETCH,
    payload: {
      request: {
        url: joinPathById(endpoint, id),
        method: 'GET',
        ...request
      }
    },
    meta: { schema }
  }
}

export function fetchEntities (payload) {
  const { endpoint, schema, meta, ...request } = payload

  return {
    type: actionTypes.ENTITIES_FETCH,
    payload: {
      request: {
        url: endpoint,
        method: 'GET',
        ...request
      }
    },
    meta: {
      schema,
      ...meta
    }
  }
}

export function updateEntity (options) {
  const {
    id,
    endpoint,
    schema,
    method = 'PATCH',
    data,
    ...payload
  } = options

  return {
    type: actionTypes.ENTITY_UPDATE,
    payload: {
      id,
      request: {
        url: joinPathById(endpoint, id),
        method,
        data
      },
      ...payload
    },
    meta: { schema }
  }
}

export function updateEntities (options) {
  const {
    endpoint,
    schema,
    method = 'PATCH',
    url = endpoint,
    ...request
  } = options

  return {
    type: actionTypes.ENTITIES_UPDATE,
    payload: {
      request: {
        url,
        method,
        ...request
      }
    },
    meta: { schema }
  }
}

export function deleteEntities (options) {
  const {
    ids,
    endpoint,
    schema,
    method,
    ...payload
  } = options

  return {
    type: actionTypes.ENTITIES_DELETE,
    payload: {
      ids,
      request: {
        url: endpoint,
        method: 'DELETE'
      },
      ...payload
    },
    meta: { schema }
  }
}

export function deleteEntity (options) {
  const { endpoint, id, schema, ...request } = options

  return {
    type: actionTypes.ENTITY_DELETE,
    payload: {
      id,
      request: {
        url: joinPathById(endpoint, id),
        method: 'DELETE',
        ...request
      }
    },
    meta: { schema }
  }
}

export function createEntity (options) {
  const {
    endpoint,
    schema,
    method = 'POST',
    dataToMerge,
    ...request
  } = options

  return {
    type: actionTypes.ENTITY_CREATE,
    payload: {
      dataToMerge,
      request: {
        url: endpoint,
        method,
        ...request
      }
    },
    meta: { schema }
  }
}
