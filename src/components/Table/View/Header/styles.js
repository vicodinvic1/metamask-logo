export default ({ palette }, { getActions, stickyHeader }) => {
  return {
    checkbox: {
      height: 30,
      padding: 0,
      width: 32,
      zIndex: 10
    },

    cell: {
      '&:before': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        content: '""',
        height: 8,
        backgroundColor: 'transparent',
        transition: 'opacity 0.2s ease',
        boxShadow: '0 4px 9px rgba(0,0,0, 0.1)',
        display: stickyHeader ? 'block' : 'none',
        opacity: 0
      },

      '&:after': {
        position: 'absolute',
        bottom: 0,
        left: -4,
        right: 0,
        content: '""',
        height: 11,
        display: stickyHeader ? 'block' : 'none',
        backgroundColor: palette.background.paper,
        zIndex: 2
      }
    },

    firstExtraIndent: {
      '&:first-child': {
        paddingLeft: 24
      }
    },

    lastCell: {
      width: getActions ? 'auto' : 0
    },

    lastExtraIndent: {
      paddingRight: 24
    },

    cellSticky: {
      '&:before': {
        opacity: 1
      }
    }
  }
}
