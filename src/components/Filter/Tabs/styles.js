export default ({ borderRadius, palette }) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: borderRadius.primary,
      position: 'relative',
      width: '100%',
      margin: '-20px 0 -30px'
    },

    scrollButtons: {
      width: 30,
      top: 20,
      bottom: 20,
      position: 'absolute',
      zIndex: 1,
      opacity: 1,

      '&:first-of-type': {
        left: -30,

        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          pointerEvents: 'none',
          top: -8,
          bottom: -8,
          left: '100%',
          width: 50,
          background: `linear-gradient(
            90deg,
            ${palette.background.light} 15%,
            rgba(255,255,255,0) 100%)
          `
        }
      },

      '&:last-of-type': {
        right: -20,

        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          pointerEvents: 'none',
          top: -8,
          bottom: -8,
          right: 'calc(100% - 10px)',
          width: 40,
          background: `linear-gradient(
            270deg,
            ${palette.background.light} 15%,
            rgba(255,255,255,0) 100%)
          `
        }
      }
    },

    tab: {
      overflow: 'visible',
      cursor: 'default',
      padding: 0,
      borderRadius: borderRadius.primary
    },

    fieldWrapper: {
      minWidth: 150,
      padding: '20px 12px',
      marginLeft: -12
    },

    selectField: {
      maxWidth: 200
    }
  }
}
