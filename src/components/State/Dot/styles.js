export default ({ palette }) => {
  return {
    root: {
      borderRadius: '50%',
      backgroundColor: palette.color.grey.main
    },

    small: {
      width: 18,
      height: 18
    },

    medium: {
      width: 22,
      height: 22
    },

    success: {
      backgroundColor: palette.color.success.main
    },

    warn: {
      backgroundColor: palette.color.warn.main
    },

    error: {
      backgroundColor: palette.color.error.main
    }
  }
}
