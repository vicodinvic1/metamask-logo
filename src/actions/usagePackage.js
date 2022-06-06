import * as schemas from 'constants/entitySchemas'

import { fetchEntities } from 'actions/entities'

export function fetchUsagePackages (payload) {
  return fetchEntities({
    endpoint: 'usagepackagetypes',
    schema: schemas.usagePackages
  })
}
