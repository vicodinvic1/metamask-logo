export default ({ borderRadius, palette }) => {
  return {
    root: {
      width: '100%',
      borderSpacing: 0,
      borderRadius: borderRadius.primary,
      backgroundColor: palette.background.paper,
      fontSize: '14px'
    },

    item: {
      td: {
        border: `1px solid ${palette.color.grey.pale}`,
        borderStyle: 'none',
        padding: '10px 12px',

        '&:first-child': {
          borderRightStyle: 'solid'
        }
      },

      '&:first-child': {
        td: {
          '&:first-child': {
            borderRadius: `${borderRadius.primary}px 0 0 0`
          }
        }
      },

      '&:last-child td': {
        borderRadius: `0 0 0 ${borderRadius.primary}px`
      },

      '&:first-child td:last-child': {
        borderRadius: `0 ${borderRadius.primary}px 0 0`
      },

      '&:last-child td:last-child': {
        borderRadius: `0 0 ${borderRadius.primary}px 0`
      },

      '&:not(:last-child) td': {
        borderBottom: `1px solid ${palette.color.grey.pale}`
      }
    },

    value: {
      borderLeft: `1px solid ${palette.color.grey.pale}`
    }
  }
}
