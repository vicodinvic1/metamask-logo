export default ({ palette, typography }) => {
  return {
    root: {
      minWidth: 140
    },

    dangerItem: {
      '&:hover': {
        backgroundColor: palette.color.red.pale
      }
    },

    dangerPrimaryText: {
      color: palette.color.red.main
    },

    primary: {
      fontWeight: typography.fontWeightSemiBold
    }
  }
}
