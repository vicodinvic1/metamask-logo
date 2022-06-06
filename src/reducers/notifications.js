import * as types from 'constants/actions'

const initalState = []

export default function notifications (state = initalState, action) {
  switch (action.type) {
    case types.ENQUEUE_SNACKBAR:
      return [
        ...state,
        {
          key: action.key,
          ...action.notification
        }
      ]

    case types.CLOSE_SNACKBAR:
      return state.map(notification => (
        (action.dismissAll || notification.key === action.key)
          ? { ...notification, dismissed: true }
          : { ...notification }
      ))

    case types.REMOVE_SNACKBAR:
      return state.filter(notification => notification.key !== action.key)

    default:
      return state
  }
}
