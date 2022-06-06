export default ({ palette, typography }) => {
  return {
    root: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: palette.secondary.text,
      fontWeight: typography.fontWeightBold
    },

    disabled: {
      cursor: 'not-allowed',
      color: palette.secondary.pale
    }
  }
}
