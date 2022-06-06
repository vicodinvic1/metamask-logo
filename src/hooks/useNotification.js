import { useEffect } from 'react'
import { useSnackbar } from 'notistack'

import useSelector from 'hooks/useSelector'

let displayed = []

const handleDisplayedUpdate = key => { displayed = [...displayed, key] }

export default function useNotification () {
  const notifications = useSelector(state => state.notifications)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    notifications.forEach((notification) => {
      const { key, message, options, dismissed = false } = notification

      if (dismissed) {
        closeSnackbar(key)
        return
      }

      if (displayed.includes(key)) return

      enqueueSnackbar(message, { key, ...options })

      handleDisplayedUpdate(key)
    })
  }, [notifications])
}
