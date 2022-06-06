export default ({ borderRadius, palette, shadow }) => {
  return {
    root: {
      padding: '9px 34px 9px 14px',
      minHeight: 48,
      fontSize: '14px',
      lineHeight: '14px',
      color: palette.secondary.main,
      borderRadius: borderRadius.primary,
      backgroundColor: palette.background.paper,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      boxShadow: shadow.light.main,

      '& path': {
        transition: 'fill 0.2s ease'
      },

      '&:hover path': {
        fill: palette.secondary.main
      }
    },

    disabled: {
      backgroundColor: palette.background.placeholder,
      color: palette.secondary.disabled,

      '&:hover': {
        boxShadow: 'none'
      }
    },

    icon: {
      marginRight: 10
    }
  }
}
