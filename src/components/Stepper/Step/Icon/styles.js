export default ({ palette, typography }) => {
  return {
    root: {
      borderRadius: '50%',
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: palette.primary.contrastText,
      backgroundColor: palette.secondary.pale,
      fontSize: '14px',
      fontWeight: typography.fontWeightSemiBold
    },

    active: {
      backgroundColor: palette.primary.main
    },

    completed: {
      backgroundColor: palette.primary.main
    }
  }
}
