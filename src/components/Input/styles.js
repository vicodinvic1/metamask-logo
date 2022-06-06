export default ({ borderRadius, palette, shadow }) => {
  return {
    root: {
      '& input': {
        padding: '7px 14px',
        lineHeight: '16px',
        borderRadius: borderRadius.primary,
        transition: 'border-color 0.2s ease',
        border: `2px solid ${palette.background.paper}`,

        '&:hover, &:focus': {
          borderColor: palette.primary.dark
        }
      }
    },

    primary: {
      '& input': {
        borderColor: palette.background.paper,
        backgroundColor: palette.background.paper
      }
    },

    secondary: {
      '& input': {
        borderColor: palette.background.default,
        backgroundColor: palette.background.default
      }
    },

    withValue: {
      '& input': {
        backgroundColor: palette.primary.pale,
        borderColor: palette.primary.main
      }
    },

    withShadow: {
      '& input': {
        boxShadow: shadow.light.main
      }
    }
  }
}
