export default ({ borderRadius, palette, shadow }) => {
  return {
    wrapper: {
      position: 'relative',
      height: 48,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: palette.background.paper,
      padding: '6px 7px',
      borderRadius: borderRadius.primary,
      boxShadow: shadow.light.main,

      '& input': {
        fontSize: '13px',
        lineHeight: '13px',
        padding: '8px 10px 6px'
      },

      '& > *:first-child': {
        marginRight: 7
      }
    },

    resetButton: {
      position: 'absolute',
      top: 14,
      right: 4,
      width: 26,
      height: 26,
      backgroundColor: palette.background.paper,
      boxShadow: shadow.light.main,

      '&:hover': {
        backgroundColor: palette.background.paper,

        '& path': {
          fill: palette.secondary.main
        }
      }
    }
  }
}
