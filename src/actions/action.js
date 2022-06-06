import omitBy from 'lodash/omitBy'

import * as actionTypes from 'constants/actions'
import * as schemas from 'constants/entitySchemas'
import {
  INVOICE_ACTION_TYPE,
  PAGE_SIZE,
  ACTION_TYPE
} from 'constants/action'
import { USAGE_PACKAGE_ACTION_TYPE } from 'constants/usagePackage'

import { fetchEntity, fetchEntities } from 'actions/entities'
import { requestAPI } from 'actions/api'

const endpoint = 'actions'

function mapActionsFetchPayload (payload) {
  const { filter, page } = payload

  return {
    actionState: filter?.actionState,
    actionType: filter?.actionType,
    sort: payload?.sort && `${payload.sort.by},${payload.sort.order}`,
    pageSize: PAGE_SIZE,
    pageNumber: page || 0
  }
}

function mapSimCardActionsFetchPayload (payload) {
  return {
    ...mapActionsFetchPayload(payload)
  }
}

export function fetchActions (payload, request) {
  return fetchEntities({
    endpoint,
    params: mapActionsFetchPayload(payload),
    schema: schemas.actions,
    cancelToken: payload.cancelToken,
    ...request
  })
}

export function fetchSimCardActions (payload) {
  return fetchActions(
    payload,
    { params: mapSimCardActionsFetchPayload(payload) }
  )
}

export function fetchAction (id) {
  return fetchEntity({
    id,
    endpoint,
    schema: schemas.action
  })
}

export function actionStatusCheck (id) {
  return requestAPI({
    payload: {
      request: {
        endpoint: [endpoint, id]
      }
    }
  })
}

export function fetchActionItems (payload) {
  const { input: { actionId }, page } = payload

  return requestAPI({
    payload: {
      request: {
        params: {
          pageNumber: page || 0,
          pageSize: PAGE_SIZE / 2
        },
        endpoint: ['actions', actionId, 'items']
      }
    }
  })
}

export function assignUsagePackage (payload) {
  const {
    billingGroupId,
    iccLowerBound,
    iccSet,
    iccUpperBound,
    usagePackageTypeId
  } = payload

  return requestAPI({
    payload: {
      request: {
        method: 'POST',
        endpoint: [endpoint, 'simcards/manageusagepackages'],
        data: {
          usagePackageTypeId,
          usagePackageManagementAction: USAGE_PACKAGE_ACTION_TYPE.ASSIGN,
          simCardFilter: {
            billingGroupId,
            iccLowerBound: iccSet
              ? undefined
              : iccLowerBound,
            iccUpperBound: iccSet
              ? undefined
              : iccUpperBound,
            iccSet: iccLowerBound
              ? undefined
              : iccSet
          }
        }
      }
    }
  })
}

export function attachActorToActions (payload) {
  return {
    type: actionTypes.ACTION_ACTOR_ATTACH,
    payload
  }
}

function mapAssignSimCardFilterToPayload (payload) {
  const { selectedIds, selectedFilter } = payload

  let filter = { iccSet: selectedIds }

  if (selectedFilter) {
    const { icc, ...restFilters } = selectedFilter

    filter = {
      iccLowerBound: icc?.from,
      iccUpperBound: icc?.to,
      ...omitBy({ ...restFilters }, v => !v)
    }
  }

  return filter
}

export function assignSimCards (payload) {
  const { customerId, tenantId, billingGroupId, ...restPayload } = payload

  return requestAPI({
    payload: {
      request: {
        method: 'POST',
        data: {
          tenantId,
          billingGroupId,
          filter: mapAssignSimCardFilterToPayload({ ...restPayload })
        },
        endpoint: [endpoint, 'assignsimcard']
      }
    }
  })
}
