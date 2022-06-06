export default ({ shadow }) => {
  return {
    table: {
      boxShadow: shadow.default
    },

    fetchButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 200,
      margin: '0 auto',
      marginTop: 20
    }
  }
}
