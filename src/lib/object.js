export function hasObjValues (obj) {
  if (!obj) {
    return false
  }

  return Object.values(obj).some(Boolean)
}
