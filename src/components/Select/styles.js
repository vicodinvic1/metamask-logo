export default ({ borderRadius, palette, shadow, typography }) => {
  return {
    root: {
      borderRadius: borderRadius.primary,

      '&:hover $select:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.main
      },

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.primary.main
      },

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.background.paper,
        transition: 'border 0.2s ease',
        borderWidth: 2
      }
    },

    withOutline: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.secondary.pale
      }
    },

    withShadow: {
      '& .MuiOutlinedInput-root': {
        boxShadow: shadow.light.main
      }
    },

    withShiftedShadow: {
      '& .MuiOutlinedInput-root': {
        boxShadow: shadow.light.xShift
      }
    },

    select: {
      '&.Mui-disabled': {
        backgroundColor: palette.background.light
      }
    },

    label: {
      textTransform: 'uppercase',
      marginBottom: 10,
      padding: '0 20px',
      fontSize: '12px',
      fontWeight: typography.fontWeightBold
    }
  }
}
