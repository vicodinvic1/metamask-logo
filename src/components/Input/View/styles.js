export default (theme) => {
  const { mixins, borderRadius, palette, typography } = theme

  return {
    floatingWrapper: {
      paddingTop: 26
    },

    fullWidth: {
      width: '100%'
    },

    multiline: {
      padding: '8px 16px',
      resize: 'none',
      minHeight: 110,
      height: 'auto',
      ...mixins.scrollbarHide
    },

    label: {
      fontSize: '14px',
      lineHeight: '24px',
      textAlign: 'left',
      fontWeight: typography.fontWeightSemiBold,
      marginLeft: 16,
      marginTop: 5
    },

    floatingLabel: {
      position: 'absolute',
      left: 0,
      top: 0,
      whiteSpace: 'nowrap'
    },

    input: {
      fontSize: '14px',
      lineHeight: '24px',
      backgroundColor: palette.background.paper,
      borderRadius: borderRadius.primary,
      display: 'inline-flex',
      alignItems: 'center',
      height: 42,
      marginBottom: 5,
      padding: '0 16px',
      width: '100%',
      fontFamily: 'inherit',
      letterSpacing: 'inherit',
      color: palette.secondary.main,
      border: '2px solid transparent',

      '&:focus-visible': {
        outline: 0
      }
    },

    disabledInput: {
      backgroundColor: palette.background.default
    },

    inputWithCopy: {
      paddingRight: 44,
      transition: 'border-color 0.2s ease, background-color 0.2s ease'
    },

    inputTransition: {
      backgroundColor: palette.primary.pale,
      borderColor: palette.color.success.main
    },

    copyButton: {
      position: 'absolute',
      right: 8,
      bottom: 11,
      width: 30,
      height: 30,
      cursor: 'pointer',

      '&:hover path': {
        fill: palette.primary.dark
      },

      '& path': {
        transition: 'fill 0.2s ease'
      }
    },

    wrapper: {
      position: 'relative'
    },

    helperText: {
      marginLeft: 16,
      fontSize: '13px',
      lineHeight: '17px',
      color: palette.secondary.pale
    },

    scrollableWrapper: {
      display: 'flex'
    },

    scrollableInput: {
      ...mixins.scrollbarHide,
      alignItems: 'flex-start',
      maxHeight: 200,
      overflowY: 'auto',
      height: 'auto',
      minHeight: 42,

      '& > *': {
        height: 'auto'
      }
    }
  }
}
