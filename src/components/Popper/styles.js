export default ({ shadow, borderRadius, palette, typography }, autoWidth) => {
  const arrow = {
    position: 'absolute',
    display: 'inline-block',
    width: 0,
    height: 0,
    borderStyle: 'solid'
  }

  return {
    root: {
      zIndex: 2000,
      position: 'relative'
    },

    top: {
      paddingBottom: 10
    },

    children: {
      maxWidth: autoWidth ? 'unset' : 320,
      borderRadius: borderRadius.secondary,
      padding: 12,
      lineHeight: '18px',
      color: palette.secondary.main,
      backgroundColor: palette.background.paper,
      boxShadow: shadow.standard,
      border: `1px solid ${palette.background.light}`
    },

    topArrow: {
      ...arrow,
      bottom: 1,
      left: '50%',
      marginLeft: -4,
      borderWidth: '10px 10px 0 10px',
      borderColor: `${palette.background.light} transparent transparent transparent`
    },

    topInnerArrow: {
      ...arrow,
      bottom: 2,
      left: -9,
      borderWidth: '9px 9px 0 9px',
      borderColor: `${palette.background.paper} transparent transparent transparent`
    },

    rightArrow: {
      ...arrow,
      top: '50%',
      left: -9,
      marginTop: -5,
      borderWidth: '10px 10px 10px 0',
      borderColor: `transparent ${palette.background.light} transparent transparent`
    },

    rightInnerArrow: {
      ...arrow,
      bottom: -9,
      left: 2,
      borderWidth: '9px 9px 9px 0',
      borderColor: `transparent ${palette.background.paper} transparent transparent`
    },

    title: {
      display: 'inline-block'
    }
  }
}
