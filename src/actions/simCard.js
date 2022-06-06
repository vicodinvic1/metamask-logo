import omitBy from 'lodash/omitBy'

import * as actionTypes from 'constants/actions'
import * as schemas from 'constants/entitySchemas'

import { requestAPI } from 'actions/api'
import {
  fetchEntity,
  fetchEntities,
  updateEntity
} from 'actions/entities'

const PAGE_SIZE = 20
const endpoint = 'simcards'

function mapPayloadToParams (payload) {
  const { page, pageSize, filter = {} } = payload
  const { icc, ...restFilters } = filter

  return {
    sort: payload.sort && `${payload.sort.by},${payload.sort.order}`,
    pageSize: pageSize || PAGE_SIZE,
    pageNumber: page || 0,
    iccLowerBound: icc?.from,
    iccUpperBound: icc?.to,
    ...omitBy({ ...restFilters }, v => !v)
  }
}

export function fetchSimCards (payload) {
  return fetchEntities({
    endpoint,
    params: mapPayloadToParams(payload),
    schema: schemas.simCards,
    cancelToken: payload.cancelToken
  })
}

export function fetchSimCard (id) {
  return fetchEntity({
    id,
    endpoint,
    schema: schemas.simCard
  })
}

function mapDatePayloadToParams (payload) {
  if (payload) {
    const { year, month } = payload
    const _month = month?.toUpperCase()

    return {
      fromYear: year,
      toYear: year,
      fromMonth: _month,
      toMonth: _month
    }
  }
}

export function fetchSimCardDataUsage (simCardId, variables) {
  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, simCardId, 'usage/data'],
        params: mapDatePayloadToParams(variables)
      }
    }
  })
}

export function fetchSimCardSMSUsage (simCardId, variables) {
  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, simCardId, 'usage/sms'],
        params: mapDatePayloadToParams(variables)
      }
    }
  })
}

export function simCardSendSMS (payload) {
  const { phoneNumber, message } = payload

  return requestAPI({
    payload: {
      request: {
        data: { message },
        endpoint: ['phonenumbers', phoneNumber, 'sms'],
        method: 'POST'
      }
    }
  })
}

function mapSelectedFilter (selectedFilter) {
  if (!selectedFilter) {
    return undefined
  }

  const { icc, ...restFilters } = selectedFilter

  return {
    iccLowerBound: icc?.from,
    iccUpperBound: icc?.to,
    ...restFilters
  }
}

export function changeSimCardNetworkState (payload) {
  const { networkStateAction, selectedIds, selectedFilter } = payload

  return {
    type: actionTypes.SIM_CARD_NETWORK_STATE_CHANGE,
    payload: {
      request: {
        data: {
          networkStateAction,
          simCardFilter: mapSelectedFilter(selectedFilter),
          iccSet: selectedFilter
            ? undefined
            : selectedIds
        },
        endpoint: 'actions/simcards/changenetworkstate',
        method: 'POST'
      }
    }
  }
}

export function fetchSimCardUsagePackages (payload) {
  const { input: { simCardId } } = payload

  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, simCardId, 'usagepackages']
      }
    }
  })
}

export function changeSimCardName (payload) {
  const { customName, simCardId } = payload

  return updateEntity({
    id: simCardId,
    endpoint,
    data: { customName },
    schema: schemas.simCard
  })
}

export function fetchSimCardLocations (payload) {
  const { input: { simCardId }, page } = payload

  return requestAPI({
    payload: {
      request: {
        params: {
          pageSize: 10,
          pageNumber: page || 0
        },
        endpoint: [endpoint, simCardId, 'locationupdates']
      }
    }
  })
}

export function fetchSimCardSessions (payload) {
  const { page, input } = payload

  return requestAPI({
    payload: {
      request: {
        params: {
          pageSize: 10,
          pageNumber: page || 0
        },
        endpoint: [endpoint, input.simCardId, 'datasessions']
      }
    }
  })
}

export function fetchSimCardActionsBySimCard (payload) {
  const { input: { simCardId }, page } = payload

  return fetchEntities({
    params: {
      pageSize: 10,
      pageNumber: page || 0
    },
    endpoint: [endpoint, simCardId, 'actions'],
    schema: schemas.actions
  })
}

export function fetchSimCardNetworkState (simCardId) {
  return requestAPI({
    payload: {
      id: simCardId,
      request: {
        endpoint: [endpoint, simCardId, 'networkstate']
      }
    }
  })
}

export function attachNetworkStatesToSimCards (payload) {
  return {
    type: actionTypes.SIM_CARDS_NETWORK_STATES_ATTACH,
    payload
  }
}
