export default ({ palette }) => {
  return {
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.background.default
    },

    container: {
      padding: '0 32px'
    },

    logo: {
      position: 'absolute',
      left: 20,
      top: '50%',
      transform: 'translate3d(0, -50%, 0)'
    },

    children: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }
}
