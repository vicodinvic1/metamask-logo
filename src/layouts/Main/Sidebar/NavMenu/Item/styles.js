import { SIDEBAR_MAX_WIDTH } from 'layouts/Main/Sidebar/styles'

const OVERFLOW = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: SIDEBAR_MAX_WIDTH - 40
}

export default ({ palette, typography }, { dense, match }) => {
  return {
    root: {
      marginBottom: 10,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 8,
      padding: '0 6px',

      '& .MuiTouchRipple-root > *:first-child': {
        color: palette.primary.main
      }
    },

    withHover: {
      '&:hover > *': {
        fontWeight: typography.fontWeightSemiBold,
        color: palette.primary.contrastText,

        '& path': {
          fill: palette.primary.contrastText
        }
      }
    },

    tooltipArrow: {
      color: palette.background.paper
    },

    startAdornment: {
      borderRadius: 8,
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },

    labelWrapper: {
      display: 'flex',
      flexDirection: 'column',
      willChange: 'transform',
      letterSpacing: typography.letterSpacing.default,
      transition: 'transform 0.2s ease',
      transform: `translate3d(${dense ? 20 : 6}px, 0, 0)`,
      fontWeight: match
        ? typography.fontWeightSemiBold
        : typography.fontWeightRegular,
      color: match
        ? palette.primary.main
        : palette.primary.contrastText
    },

    primaryLabel: {
      fontSize: '13px',
      whiteSpace: 'nowrap',
      ...OVERFLOW
    },

    secondaryLabel: {
      textAlign: 'left',
      fontSize: '13px',
      whiteSpace: 'nowrap',
      fontWeight: typography.fontWeightRegular,
      ...OVERFLOW
    },

    profileLabel: {
      fontSize: '16px',
      fontWeight: typography.fontWeightSemiBold
    }
  }
}
