export default ({ typography, borderRadius, palette }, CENTER_ALIGN) => {
  return {
    root: {
      border: '2px solid',
      borderRadius: borderRadius.primary,
      padding: '10px 14px',
      textAlign: CENTER_ALIGN ? 'center' : 'left',
      fontWeight: typography.fontWeightSemiBold
    },

    small: {
      fontSize: '13px',
      lineHeight: '22px'
    },

    medium: {
      fontSize: '14px',
      lineHeight: '30px'
    },

    danger: {
      borderColor: palette.color.red.light,
      backgroundColor: palette.color.error.background
    },

    warn: {
      borderColor: palette.color.orange.light,
      backgroundColor: palette.color.warn.background
    },

    success: {
      borderColor: palette.primary.main,
      backgroundColor: palette.color.success.background
    }
  }
}
