export default ({ borderRadius }) => {
  return {
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      width: 32
    },

    checkbox: {
      borderRadius: borderRadius.secondary,
      width: 24,
      height: 24,
      margin: '0 auto'
    },

    circle: {
      width: 18,
      height: 18,
      margin: '0 auto'
    },

    rect: {
      width: '100%',
      height: 23,
      borderRadius: borderRadius.secondary
    },

    extraIndent: {
      '&:first-child': {
        paddingLeft: 24
      }
    }
  }
}
