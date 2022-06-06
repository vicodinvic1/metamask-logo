export function joinPath (...segments) {
  return segments.filter(Boolean).join('/')
}

export function joinPathById (url, id) {
  return Array.isArray(url)
    ? [joinPath(...url), id]
    : [url, id]
}
