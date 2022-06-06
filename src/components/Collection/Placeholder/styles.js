export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: 40
  },

  withTopIndent: {
    marginTop: 80
  },

  icon: {
    marginBottom: 20,
    height: 58,
    width: 58,

    '& > *': {
      width: '100%',
      height: '100%'
    }
  },

  iconAutoSize: {
    width: 'auto',
    height: 'auto',

    '& > *': {
      width: 'initial',
      height: 'initial'
    }
  },

  title: {
    marginBottom: 13
  },

  subtitle: {
    whiteSpace: 'pre-wrap'
  },

  centered: {
    margin: 'auto'
  }
}
