import * as schemas from 'constants/entitySchemas'

import {
  createEntity,
  fetchEntity,
  fetchEntities,
  deleteEntity
} from 'actions/entities'

const PAGE_SIZE = 10

const endpoint = 'webhooksubscriptions'

function mapPayloadToParams (payload) {
  const { page } = payload

  return {
    pageNumber: page,
    pageSize: PAGE_SIZE
  }
}

export function fetchWebhooks (payload) {
  return fetchEntities({
    endpoint,
    params: mapPayloadToParams(payload),
    schema: schemas.webhooks
  })
}

export function fetchWebhook (payload) {
  return fetchEntity({
    endpoint,
    id: payload.id,
    schema: schemas.webhook
  })
}

export function createWebhook (data) {
  return createEntity({
    data,
    endpoint,
    schema: schemas.webhook
  })
}

export function deleteWebhook (id) {
  return deleteEntity({
    id,
    endpoint,
    schema: schemas.webhook
  })
}
