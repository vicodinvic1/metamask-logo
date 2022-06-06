export default ({ palette }) => {
  return {
    root: {
      '& > *': {
        backgroundColor: palette.background.paper,
        borderColor: palette.background.paper
      },

      '&:hover:not(.MuiTableRow-head) > *': {
        backgroundColor: palette.background.paper,
        borderColor: palette.background.paper
      }
    },

    cell: {
      padding: '50px 0 20px',

      '&:hover': {
        backgroundColor: palette.background.paper
      }
    }
  }
}
