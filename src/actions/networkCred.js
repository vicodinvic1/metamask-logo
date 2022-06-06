import * as actionTypes from 'constants/actions'
import * as schemas from 'constants/entitySchemas'

import { fetchEntities } from 'actions/entities'

export function fetchNetworkCreds (simCardId) {
  return fetchEntities({
    endpoint: ['simcards', simCardId, 'networkcredentials'],
    schema: schemas.networkCreds
  })
}

export function fetchNetworkCredPhoneNumbers (imsi) {
  return ({
    type: actionTypes.NETWORK_CRED_PHONE_NUMBERS,
    payload: {
      data: { id: imsi },
      request: {
        endpoint: ['networkcredentials', imsi, 'phonenumbers']
      }
    }
  })
}
