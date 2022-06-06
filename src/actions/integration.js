import * as schemas from 'constants/entitySchemas'

import { requestAPI } from 'actions/api'
import { fetchEntity, fetchEntities } from 'actions/entities'

const endpoint = 'integrations'

export function fetchIntegrations () {
  return fetchEntities({
    endpoint,
    schema: schemas.integrations
  })
}

export function simpleFetchIntegrations () {
  return requestAPI({
    payload: {
      request: {
        endpoint
      }
    }
  })
}

export function fetchIntegration (id) {
  return fetchEntity({
    endpoint,
    id,
    schema: schemas.integration
  })
}

export function rollIntegrationSecret (integration) {
  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, integration.id, 'rollSecret'],
        method: 'POST'
      }
    }
  })
}
