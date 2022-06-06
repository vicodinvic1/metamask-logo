export default ({ borderRadius, palette }) => {
  const chip = {
    textAlign: 'left',
    paddingTop: 2,
    width: '100%',
    marginRight: 4,
    marginBottom: 4,
    borderRadius: 0
  }

  const wrapper = {
    borderRadius: borderRadius.secondary,
    border: '2px solid'
  }

  return {
    root: {
      lineHeight: '20px',

      '& p': {
        padding: '4px 8px 8px',
        margin: 0
      }
    },

    title: {
      marginBottom: 6
    },

    readChip: {
      ...chip,
      color: palette.color.green.main,
      backgroundColor: palette.color.green.pale
    },

    manageChip: {
      ...chip,
      color: palette.color.orange.dark,
      backgroundColor: palette.color.orange.bright
    },

    readWrapper: {
      ...wrapper,
      marginBottom: 12,
      borderColor: palette.color.green.pale
    },

    manageWrapper: {
      ...wrapper,
      borderColor: palette.color.orange.bright
    }
  }
}
