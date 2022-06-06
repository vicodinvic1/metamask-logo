export default ({ borderRadius, palette, shadow, transition, typography }) => {
  return {
    root: {
      display: 'inline-block',
      textAlign: 'center',
      borderRadius: borderRadius.primary,
      fontWeight: typography.fontWeightSemiBold,
      color: palette.primary.contrastText,
      backgroundColor: palette.color.grey.main
    },

    withClick: {
      '&:hover': {
        color: palette.primary.contrastText
      }
    },

    withChildren: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    children: {
      marginLeft: 10
    },

    medium: {
      fontSize: '15px',
      lineHeight: '24px',
      minWidth: 140,
      padding: '8px 20px'
    },

    small: {
      fontSize: '13px',
      lineHeight: '22px',
      minWidth: 100,
      padding: '4px 10px'
    }
  }
}
