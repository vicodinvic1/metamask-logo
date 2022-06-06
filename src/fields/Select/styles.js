export default ({ borderRadius, palette, shadow, typography }, isDefaultValue) => {
  return {
    root: {
      position: 'relative',
      color: palette.secondary.main,
      textAlign: 'left',

      '& .MuiOutlinedInput-root': {
        '&:hover:not(.Mui-error, .Mui-disabled)': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.dark
          }
        },

        '&.Mui-focused': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.dark
          }
        },

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.background.paper,
          transition: 'border 0.2s ease',
          borderWidth: 2
        }
      }
    },

    withShadow: {
      '& .MuiOutlinedInput-root:not(.Mui-disabled)': {
        boxShadow: shadow.light.main
      }
    },

    withShiftedShadow: {
      '& .MuiOutlinedInput-root': {
        boxShadow: shadow.light.xShift
      }
    },

    withOutline: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.pale
      }
    },

    label: {
      fontWeight: typography.fontWeightSemiBold,
      fontSize: '15px',
      color: palette.secondary.light,

      '&.MuiInputLabel-shrink': {
        transform: 'translate3d(13px, 7px, 0) scale(0.85)'
      }
    },

    select: {
      '&.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
        fontSize: '15px',
        paddingRight: 40,
        color: isDefaultValue
          ? palette.secondary.pale
          : palette.secondary.main
      }
    },

    withLabelSelect: {
      '&.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
        paddingTop: 30,
        paddingRight: 50,
        paddingBottom: 12,
        paddingLeft: 15
      }
    },

    successLabel: {
      color: palette.primary.dark,

      '&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
        color: palette.primary.dark
      }
    },

    labelDisabled: {
      opacity: 0.5,
      color: palette.secondary.main
    },

    withLabelIcon: {
      right: 14
    },

    error: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.color.red.light,
        backgroundColor: palette.color.error.background
      }
    },

    success: {
      '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
        backgroundColor: palette.primary.pale
      },

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.primary.dark
      },

      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.primary.main
      }
    },

    resetButton: {
      position: 'absolute',
      backgroundColor: palette.background.paper,
      top: -8,
      right: -8,
      width: 26,
      height: 26,
      border: `2px solid ${palette.primary.main}`,
      transition: 'border 0.2s ease',
      zIndex: 1,

      '&:hover': {
        borderColor: palette.primary.dark,
        backgroundColor: palette.background.paper,

        '& path': {
          fill: palette.secondary.main
        }
      }
    },

    disabled: {
      backgroundColor: 'transparent',

      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.color.grey.main
      },

      '& .MuiInputBase-root.Mui-disabled': {
        color: palette.secondary.main
      }
    },

    readOnlySelect: {
      cursor: 'default'
    },

    paper: {
      marginTop: 5,
      borderRadius: borderRadius.primary,
      border: `1px solid ${palette.color.grey.light}`
    },

    withExternalEndAdornment: {
      '& .MuiInputBase-root.MuiOutlinedInput-root': {
        paddingRight: 0
      }
    },

    externalEndAdornment: {
      position: 'absolute',
      top: '50%',
      transform: 'translate3d(0, -50%, 0)',
      right: -34
    }
  }
}
