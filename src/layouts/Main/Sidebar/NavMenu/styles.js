export default {
  root: {
    marginTop: 45,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& > *:last-child': {
      marginTop: 'auto',
      overflow: 'hidden'
    }
  },

  avatar: {
    '& > div': {
      width: 46,
      height: 46,
      fontSize: '13px'
    }
  }
}
