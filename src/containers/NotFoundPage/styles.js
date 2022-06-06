export default ({ palette }, inverted) => {
  const color = inverted
    ? palette.secondary.main
    : palette.primary.contrastText

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },

    error: {
      fontSize: '56px',
      fontWeight: 700,
      marginBottom: 40,
      color
    },

    title: {
      marginBottom: 40,
      color
    }
  }
}
