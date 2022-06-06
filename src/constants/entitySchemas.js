import { schema } from 'normalizr'

const user = new schema.Entity('users')
const users = new schema.Array(user)

export {
  user,
  users
}
