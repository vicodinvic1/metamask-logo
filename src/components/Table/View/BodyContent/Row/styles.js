export default ({ palette, transition }, getActions) => {
  return {
    actionsCell: {
      width: getActions ? 'auto' : 1,
      paddingRight: 14
    },

    checkbox: {
      height: 30,
      padding: 0,
      width: 32
    },

    clickable: {
      cursor: 'pointer'
    },

    selected: {
      '& > *': {
        backgroundColor: palette.background.bright
      }
    },

    actionButton: {
      height: 30,
      width: 30,

      '&:hover path': {
        fill: palette.secondary.main
      },

      '& path': {
        transition: `fill ${transition.default}`
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
    },

    action: {
      width: 30,
      height: 30,

      '&:hover path': {
        fill: palette.secondary.main
      },

      '& path': {
        fill: palette.secondary.pale
      }
    },

    dangerAction: {
      '&:hover': {
        backgroundColor: palette.color.red.pale,
        color: palette.color.red.main,

        '& path': {
          fill: palette.color.red.main
        }
      }
    }
  }
}
