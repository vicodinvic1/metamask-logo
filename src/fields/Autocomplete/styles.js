export default (theme, outlined) => {
  const { shadow, borderRadius, transition, palette } = theme

  const paper = {
    minWidth: '100%',
    padding: '10px 0',
    zIndex: 1,
    position: 'absolute',
    top: outlined
      ? -12
      : 6,
    listStyle: 'none',
    backgroundColor: palette.background.paper,
    borderRadius: borderRadius.primary,
    transition: transition.shadow,
    boxShadow: shadow.default,
    border: `1px solid ${palette.color.grey.light}`
  }

  return {
    root: {
      position: 'relative',

      '& .MuiInput-root': {
        paddingBottom: 0,
        padding: '0px 6px 0',

        '& .MuiInput-input': {
          padding: '11px 6px 10px'
        }
      }
    },

    disabled: {
      pointerEvents: 'none'
    },

    listbox: {
      ...paper,
      color: palette.secondary.main,
      maxHeight: 240
    },

    noOptions: {
      ...paper,
      padding: 14
    },

    option: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      height: 30,
      display: 'flex',
      alignItems: 'center',
      padding: 10,

      '&[data-focus="true"]': {
        backgroundColor: palette.primary.pale,
        cursor: 'pointer'
      },

      '&:active': {
        backgroundColor: palette.primary.pale
      }
    },

    resetButton: {
      position: 'absolute',
      top: outlined ? -2 : -8,
      right: outlined ? -10 : -8,
      width: 26,
      height: 26,
      boxShadow: 'none',
      border: `2px solid ${palette.primary.main}`,
      transition: 'border 0.2s ease',
      backgroundColor: palette.background.paper,
      zIndex: 1,

      '&:hover': {
        backgroundColor: palette.background.paper,
        borderColor: palette.primary.dark,

        '& path': {
          fill: palette.secondary.main
        }
      }
    }
  }
}
