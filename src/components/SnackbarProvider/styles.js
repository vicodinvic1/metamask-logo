export default function ({ borderRadius, palette, typography }) {
  return {
    container: {
      '&.SnackbarContainer-bottom': {
        bottom: 14
      },

      '& .SnackbarItem-contentRoot': {
        flexWrap: 'nowrap',
        border: '2px solid transparent',
        borderRadius: borderRadius.primary,
        boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.11)',
        fontSize: '13px',
        lineHeight: 1.85,
        color: palette.secondary.main,
        letterSpacing: typography.letterSpacing.default
      }
    },

    error: {
      '&.SnackbarItem-contentRoot.SnackbarItem-variantError': {
        borderColor: palette.color.red.light,
        backgroundColor: palette.color.error.background
      }
    },

    warning: {
      '&.SnackbarItem-contentRoot.SnackbarItem-variantWarning': {
        borderColor: palette.color.orange.light,
        backgroundColor: palette.color.orange.background
      }
    },

    success: {
      '&.SnackbarItem-contentRoot.SnackbarItem-variantSuccess': {
        borderColor: palette.color.green.main,
        backgroundColor: palette.color.success.background
      }
    }
  }
}
