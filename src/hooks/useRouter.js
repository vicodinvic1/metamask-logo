import { parse } from 'qs'
import { PARSE_OPTIONS } from 'constants/qs'

import useSelector from 'hooks/useSelector'

export default function useRouter () {
  const router = useSelector(selector, areRoutesEqual)
  return router
}

function selector (state) {
  return {
    ...state.router,
    location: {
      ...state.router.location,
      params: parse(state.router.location.search, PARSE_OPTIONS)
    }
  }
}

function areRoutesEqual (prevRouter, nextRouter) {
  return prevRouter.location.key === nextRouter.location.key
}
