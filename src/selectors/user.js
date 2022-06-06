import * as schemas from 'constants/entitySchemas'
import {
  createEntitiesSelector,
  createSimpleEntitySelector
} from 'selectors/entity'

export function createUsersSelector (props) {
  return createEntitiesSelector({
    ...props,
    schema: schemas.users
  })
}

export function createUserSelector (props) {
  return createSimpleEntitySelector({
    ...props,
    id: props.id,
    schema: schemas.user
  })
}
