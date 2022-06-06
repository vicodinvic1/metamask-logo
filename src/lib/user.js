import { USER_AVATAR_BACKGROUNDS } from 'constants/user'

export function isAuthorizedUser (user) {
  return user?.isAuthorized
}

export function getUserName (user) {
  return user?.name
}

export function getUserAvatarText (user) {
  return user?.name?.[0].toUpperCase()
}

export function getAvatarBackground (user) {
  const index = getUserName(user).length % USER_AVATAR_BACKGROUNDS.length

  return USER_AVATAR_BACKGROUNDS[index]
}

export function mapUserToInitialValues (user) {
  if (!user) {
    return {}
  }

  const { name, email, picture } = user

  return {
    name,
    email,
    picture: { picture }
  }
}
