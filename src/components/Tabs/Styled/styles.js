export default ({ borderRadius, palette, shadow }, scrollable) => {
  return {
    styled: {
      display: 'inline-flex',
      borderRadius: borderRadius.primary,
      overflow: 'visible',
      backgroundColor: palette.color.grey.pale,

      '& .MuiTabs-scroller': {
        overflow: scrollable
          ? 'scroll'
          : 'visible !important' // to override dynamic attached style
        // to make Tab's box-shadow visible
      }
    },

    styledTab: {
      borderRadius: borderRadius.primary,
      padding: '11px 26px'
    },

    styledSelectedTab: {
      boxShadow: shadow.default,
      backgroundColor: palette.background.paper
    },

    highlightedTab: {
      color: palette.error.main,
      backgroundColor: palette.color.error.background,

      '&:hover': {
        color: palette.color.red.dark
      }
    },

    highlightedSelectedTab: {
      '&.Mui-selected': {
        color: palette.error.main,
        backgroundColor: palette.color.error.background,

        '&:hover': {
          color: palette.color.red.dark
        }
      }
    }
  }
}
