import * as schemas from 'constants/entitySchemas'

import { requestAPI } from 'actions/api'
import {
  createEntity,
  deleteEntity,
  fetchEntity,
  fetchEntities,
  updateEntity
} from 'actions/entities'

export function fetchAccessTokens (integrationId) {
  return fetchEntities({
    endpoint: ['integrations', integrationId, 'accesstokens'],
    schema: schemas.accessTokens
  })
}

export function fetchAccessToken ({ integrationId, accessTokenId }) {
  return fetchEntity({
    endpoint: ['integrations', integrationId, 'accesstokens'],
    id: accessTokenId,
    schema: schemas.accessToken
  })
}

export function simpleFetchAccessToken ({ integrationId, accessTokenId }) {
  return requestAPI({
    payload: {
      request: {
        endpoint: ['integrations', integrationId, 'accesstokens', accessTokenId]
      }
    }
  })
}

export function createAccessToken (payload) {
  const { description, name, integrationId } = payload

  return createEntity({
    endpoint: ['integrations', integrationId, 'accesstokens'],
    data: {
      name,
      description
    },
    schema: schemas.accessToken
  })
}

export function updateAccessToken (payload) {
  const { id, description, name, integrationId } = payload

  return updateEntity({
    id,
    endpoint: ['integrations', integrationId, 'accesstokens'],
    data: {
      name,
      description
    },
    schema: schemas.accessToken
  })
}

export function deleteAccessToken ({ integrationId, accessTokenId }) {
  return deleteEntity({
    id: accessTokenId,
    endpoint: ['integrations', integrationId, 'accesstokens'],
    schema: schemas.accessToken
  })
}
