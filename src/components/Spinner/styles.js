export default ({ palette }, size) => {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: size ? 'unset' : '100%',
      minHeight: size ? 'unset' : 200
    },

    centered: {
      margin: 'auto'
    },

    disabled: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `2px solid ${palette.primary.contrastText}`
    },

    withIndent: {
      padding: 80
    }
  }
}
