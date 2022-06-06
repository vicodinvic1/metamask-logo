export default ({ palette, spacing, shadow, typography }, anchorEl) => {
  return {
    button: {
      textAlign: 'center',
      justifyContent: 'space-between',
      color: palette.primary.contrastText,
      backgroundColor: anchorEl
        ? palette.primary.dark
        : palette.primary.main,

      '&:hover': {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.dark
      }
    },

    popover: {
      marginTop: 10
    },

    icon: {
      transition: 'transform 0.2s ease',
      transform: anchorEl ? 'rotate(180deg)' : 'rotate(0)'
    }
  }
}
