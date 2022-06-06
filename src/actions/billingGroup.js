import * as actionTypes from 'constants/actions'
import * as schemas from 'constants/entitySchemas'

import { requestAPI } from 'actions/api'
import { fetchEntity, fetchEntities } from 'actions/entities'

const endpoint = '/billinggroups'

export function fetchBillingGroups (payload) {
  return fetchEntities({
    endpoint,
    schema: schemas.billingGroups
  })
}

export function fetchBillingGroup (id) {
  return fetchEntity({
    id,
    endpoint,
    schema: schemas.billingGroup
  })
}

export function fetchBillingGroupDataUsage (id) {
  return requestAPI({
    type: actionTypes.BILLING_GROUP_DATA_USAGE,
    payload: {
      request: {
        data: { id },
        endpoint: [endpoint, id, 'usage/data']
      }
    }
  })
}

export function fetchBillingGroupSMSUsage (id) {
  return requestAPI({
    type: actionTypes.BILLING_GROUP_SMS_USAGE,
    payload: {
      request: {
        data: { id },
        endpoint: [endpoint, id, 'usage/sms']
      }
    }
  })
}

export function attachUsageToBillingGroups (payload) {
  return {
    type: actionTypes.BILLING_GROUP_USAGE_ATTACH,
    payload
  }
}

export function attachSimCardCountersToBillingGroup (payload) {
  return {
    type: actionTypes.BILLING_GROUP_SIM_CARD_COUNTERS_ATTACH,
    payload
  }
}
