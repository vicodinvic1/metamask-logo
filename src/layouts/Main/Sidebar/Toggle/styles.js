export default ({ palette }) => {
  return {
    root: {
      justifyContent: 'flex-start',
      width: 'auto',
      padding: '14px 18px',
      margin: '10px 0',

      '&:hover ': {
        '& $label': {
          color: palette.primary.main
        }
      }
    },

    label: {
      paddingLeft: 15,
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      fontSize: '13px',
      letterSpacing: '0.75px',
      color: palette.secondary.disabled
    },

    tooltip: {
      width: 'fit-content'
    }
  }
}
