export default ({ palette, typography }) => {
  return {
    root: {
      borderRadius: '50%',
      fontSize: '15px'
    },

    altAvatar: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: palette.primary.contrastText,
      borderRadius: '50%',
      fontWeight: typography.fontWeightSemiBold
    },

    small: {
      fontSize: '13px',
      width: 38,
      height: 38
    },

    medium: {
      width: 44,
      height: 44
    },

    large: {
      fontSize: '20px',
      width: 66,
      height: 66
    }
  }
}
