export default ({ palette }, getActions) => {
  return {
    actionsCell: {
      width: getActions ? 'auto' : 1,
      paddingRight: 10
    },

    clickable: {
      cursor: 'pointer'
    },

    selected: {
      '& > *': {
        backgroundColor: palette.background.bright
      }
    },

    firstExtraIndent: {
      '&:first-child': {
        paddingLeft: 24
      }
    },

    lastExtraIndent: {
      '&:last-child': {
        paddingRight: 24
      }
    }
  }
}
