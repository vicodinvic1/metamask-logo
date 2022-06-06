import SimCardIcon from 'icons/SimCard'

import * as routes from 'constants/routes'

export default user => [
  {
    label: 'Sliva',
    route: routes.LOGIN_ROUTE,
    icon: SimCardIcon
  }
].filter(Boolean)
