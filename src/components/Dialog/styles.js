export default ({ borderRadius, palette, shape }) => {
  return {
    root: {
      position: 'relative',
      padding: '65px 32px 32px',
      backgroundColor: palette.background.paper,
      borderRadius: borderRadius.primary * 2,
      boxShadow: '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)'
    },

    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }
}
