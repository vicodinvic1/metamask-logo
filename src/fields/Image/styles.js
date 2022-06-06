export default ({ palette, typography, shadow }) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    },

    wrapper: {
      position: 'relative'
    },

    imageContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      width: 66,
      height: 66,
      borderRadius: '50%',
      overflow: 'hidden',
      color: palette.primary.contrastText,

      '& img': {
        width: '100%',
        height: 'inherit',
        objectFit: 'cover'
      }
    },

    placeholder: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'inherit',
      borderRadius: '50%',
      fontSize: '24px',
      fontWeight: typography.fontWeightSemiBold,
      color: palette.primary.contrastText,
      backgroundColor: palette.color.blue.light,
      transition: 'border 0.3s ease',

      '&:hover': {
        borderColor: palette.secondary.light
      }
    },

    openButton: {
      position: 'absolute',
      top: -16,
      left: -16,
      borderRadius: '50%',
      backgroundColor: palette.background.paper,
      boxShadow: shadow.default,
      border: '2px solid transparent',
      transition: 'border-color 0.25s ease',

      '&:hover': {
        borderColor: palette.secondary.main,
        backgroundColor: palette.background.paper
      }
    },

    openButtonFocused: {
      borderColor: palette.primary.main
    },

    popover: {
      minWidth: 215
    },

    menuItem: {
      fontSize: '13px',
      color: palette.secondary.main,
      padding: '10px 16px 10px 14px'
    },

    removeItem: {
      color: palette.error.main,

      '&:hover': {
        color: palette.error.main,
        backgroundColor: palette.color.error.background
      }
    }
  }
}
