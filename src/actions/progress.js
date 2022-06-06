import * as types from 'constants/actions'

export function progressQueryStart () {
  return progressStart('query')
}

export function progressMutationStart () {
  return progressStart('mutation')
}

function progressStart (type) {
  return {
    type: types.PROGRESS_START,
    payload: {
      type
    }
  }
}

export function progressStop () {
  return {
    type: types.PROGRESS_STOP
  }
}
