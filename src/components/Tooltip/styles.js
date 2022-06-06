export default ({ borderRadius, palette, typography, shadow }) => {
  return {
    root: {
      display: 'inline-block'
    },

    withHelpCursor: {
      cursor: 'help'
    },

    popper: {
      opacity: 1
    },

    tooltip: {
      maxWidth: 320,
      borderRadius: borderRadius.secondary,
      padding: 12,
      fontSize: '12px',
      lineHeight: '18px',
      color: palette.secondary.main,
      whiteSpace: 'pre-line',
      fontWeight: typography.fontWeightMedium,
      backgroundColor: palette.background.paper,
      boxShadow: shadow.standard,
      border: `1px solid ${palette.background.light}`
    },

    largeTooltip: {
      fontSize: '16px',
      lineHeight: '22px'
    },

    multiline: {
      paddingRight: 40,
      maxWidth: 420
    },

    left: {
      textAlign: 'left'
    },

    center: {
      textAlign: 'center'
    }
  }
}
