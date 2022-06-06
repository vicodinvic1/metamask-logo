export default ({ borderRadius, palette, transition, typography, shadow }) => {
  return {
    root: {
      color: palette.secondary.main
    },

    inputWithEndAdornment: {
      paddingRight: 18
    },

    input: {
      lineHeight: '19px',

      '& input': {
        paddingRight: 14,
        paddingLeft: 14
      }
    },

    multilineInput: {
      paddingTop: 26,
      paddingLeft: 14,
      lineHeight: '20px'
    },

    disabled: {
      backgroundColor: 'transparent'
    },

    label: {
      fontWeight: typography.fontWeightSemiBold,
      fontSize: '15px',
      lineHeight: '26px',
      color: palette.secondary.light
    },

    disabledLabel: {
      color: palette.secondary.pale,

      '&.Mui-error': {
        color: palette.secondary.pale
      },

      '& .MuiFormLabel-asterisk.Mui-error': {
        color: palette.secondary.pale
      }
    },

    multilineLabel: {
      top: -4,

      '&.MuiInputLabel-shrink': {
        transform: 'translate3d(13px, 10px, 0) scale(0.85)'
      }
    },

    largeHelperText: {
      marginLeft: 24
    },

    endAdornment: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 10
    },

    validFilled: {
      backgroundColor: palette.primary.pale,
      borderColor: palette.primary.main,

      '&:hover': {
        backgroundColor: palette.primary.pale,
        borderColor: palette.primary.main
      },

      '&.Mui-focused': {
        backgroundColor: palette.primary.pale,
        borderColor: palette.primary.main
      }
    },

    validLabel: {
      color: palette.primary.dark
    },

    standardInput: {
      borderRadius: 0,
      backgroundColor: 'transparent',

      '& input': {
        padding: '12px 0 6px'
      },

      '&:hover, &.Mui-focused': {
        backgroundColor: 'transparent'
      },

      '&.Mui-error': {
        backgroundColor: 'transparent'
      }
    },

    standardLargeInput: {
      fontSize: '16px',

      '& input': {
        padding: '12px 0 6px'
      }
    },

    standardLabel: {
      fontSize: '13px',
      fontWeight: typography.fontWeightSemiBold,
      color: palette.secondary.pale,

      '&.MuiInputLabel-formControl': {
        transform: 'translate(-2px, 6px) scale(1)'
      },

      '&.Mui-focused': {
        color: palette.primary.main,

        '& .MuiFormLabel-asterisk': {
          color: palette.primary.main
        }
      },

      '&.MuiInputLabel-shrink': {
        fontWeight: typography.fontWeightSemiBold,
        transform: 'translate(-2px, 6px) scale(1)'
      },

      '&.MuiFormLabel-root.Mui-error': {
        color: palette.error.main,

        '& .MuiFormLabel-asterisk': {
          color: palette.error.main
        }
      }
    },

    largeStandardLabel: {
      fontSize: '16px',

      '& .MuiInputLabel-formControl': {
        transform: 'translate(-2px, 2px) scale(1)'
      },

      '&.MuiInputLabel-shrink': {
        transform: 'translate(-2px, 2px) scale(1)'
      }
    },

    noValueButton: {
      fontSize: '13px',
      position: 'absolute',
      top: '50%',
      transform: 'translate3d(0, -50%, 0)',
      left: 'calc(100% + 14px)',

      '&:hover path': {
        fill: palette.secondary.main
      }
    },

    withBackgroundInput: {
      border: `2px solid ${palette.background.paper}`,
      borderRadius: borderRadius.primary,
      backgroundColor: palette.background.paper,
      transition: `border-color ${transition.default}, background-color ${transition.default}`,

      '&:not(.Mui-disabled)': {
        boxShadow: shadow.default,

        '&:hover, .Mui-focused': {
          borderColor: palette.primary.dark
        }
      },

      '&.Mui-disabled': {
        borderColor: palette.color.grey.light
      }
    },

    withBackgroundInputValid: {
      borderColor: palette.primary.main,
      backgroundColor: palette.primary.pale
    }
  }
}
