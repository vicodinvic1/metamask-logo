export default ({ shadow, palette, typography }) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 40
    },

    container: {
      display: 'flex',
      alignItems: 'center'
    },

    breadcrumb: {
      fontWeight: typography.fontWeightSemiBold,
      color: palette.primary.main,
      textShadow: shadow.text,
      padding: '8px 0',
      position: 'relative',

      '&:not(:last-child):hover': {
        textDecoration: 'underline'
      }
    },

    last: {
      textShadow: 'none',
      color: palette.secondary.main
    },

    arrow: {
      width: 20,
      height: 20,
      margin: '0 4px'
    }
  }
}
