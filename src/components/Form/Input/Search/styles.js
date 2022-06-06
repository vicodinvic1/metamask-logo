export default ({ palette }) => {
  return {
    root: {
      position: 'relative'
    },

    withShadow: {
      boxShadow: '6px 6px 10px 0 rgba(0, 0, 0, 0.05)'
    },

    input: {
      minWidth: 270,
      height: 48,
      width: '100%',
      paddingRight: 26,
      borderColor: palette.background.paper,

      '& input': {
        paddingTop: 12,
        paddingBottom: 12
      }
    },

    withValue: {
      backgroundColor: palette.primary.pale,
      borderColor: palette.primary.main
    },

    startAdornment: {
      marginRight: 10
    },

    resetButton: {
      width: 30,
      height: 30,
      position: 'absolute',
      top: '50%',
      right: 8,
      transform: 'translate3d(0, -50%, 0)'
    }
  }
}
