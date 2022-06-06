export default ({ borderRadius, palette }) => {
  return {
    root: {
      width: 24,
      height: 24,
      fontSize: '16px',
      color: palette.secondary.pale,
      borderRadius: borderRadius.secondary,

      '&:hover': {
        color: palette.primary.main
      }
    },

    autoSize: {
      width: 'auto',
      height: 'auto',
      padding: 5
    },

    largeSize: {
      fontSize: '22px'
    }
  }
}
