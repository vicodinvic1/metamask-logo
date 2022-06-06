export default ({ palette }) => {
  return {
    root: {
      backgroundColor: palette.background.light,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      width: '100%',
      transition: 'padding-left 0.2s ease'
    },

    children: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: '0 36px',
      transition: 'padding-bottom 0.2s ease'
    },

    toolbar: {
      padding: '14px 0'
    },

    toolbarContainer: {
      display: 'flex',
      justifyContent: 'space-between',

      '& > *:first-child': {
        flexGrow: 1
      }
    }
  }
}
