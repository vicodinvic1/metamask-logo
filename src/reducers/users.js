import * as types from 'constants/actions'

import {
  createAddEntitiesToState,
  createAddNewEntityToState,
  createDeleteEntityFromState
} from 'lib/entity'

const initialState = {}
const ENTITY_KEY = 'users'

const addEntitiesToState = createAddEntitiesToState(ENTITY_KEY)
const addNewEntityToState = createAddNewEntityToState(ENTITY_KEY)
const deleteEntityFromState = createDeleteEntityFromState(ENTITY_KEY)

export default function users (state = initialState, action) {
  switch (action.type) {
    case types.ENTITY_FETCH_SUCCESS:
    case types.ENTITIES_FETCH_SUCCESS:
      return addEntitiesToState(state, action)

    case types.ENTITY_CREATE_SUCCESS:
      return addNewEntityToState(state, action)

    case types.ENTITY_DELETE_SUCCESS:
      return deleteEntityFromState(state, action)

    default:
      return state
  }
}
