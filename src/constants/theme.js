import { createTheme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'

const color = {
  error: {
    main: '#f14f50',
    background: '#ffe8e8'
  },
  warn: {
    dark: '#d69a24',
    main: '#F4B740',
    background: '#ffdfa1'
  },
  success: {
    dark: '#389458',
    main: '#40b36c',
    background: '#c1e8d0'
  },
  green: {
    dark: '#389458',
    main: '#40b36c',
    pale: '#c1e8d0'
  },
  red: {
    dark: '#b53a3a',
    main: '#f14f50',
    light: '#ffb8b8',
    pale: '#ffe8e8'
  },
  blue: {
    dark: '#3376b8',
    main: '#4697e8',
    light: '#6fbee4'
  },
  black: {
    main: '#000000',
    half: '#737474'
  },
  grey: {
    pale: '#E3E7E9',
    light: '#e5e5e5',
    main: '#c6cbd4'
  },
  orange: {
    pale: '#fff9ed',
    bright: '#fce8c0',
    dark: '#e39e17',
    main: '#F4B740',
    light: '#ffc857'
  },
  violet: {
    dark: '#6e4e9c',
    main: '#8c67bf'
  }
}

const palette = {
  primary: {
    contrastText: '#ffffff',
    dark: '#007a6c',
    disabled: '#A1D9D0',
    hover: '#438f83',
    light: '#cedfde',
    main: '#59bfaf',
    pale: '#DCEEEB'
  },
  secondary: {
    contrastText: '#ffffff',
    disabled: '#829296',
    light: '#4e4b66',
    main: '#05252d',
    pale: '#969696'
  },
  background: {
    bright: '#F9FAFA',
    default: '#F0F3F3',
    dark: '#cccccc',
    light: '#eff3f3',
    paper: '#ffffff',
    dirty: '#f2f3f8',
    placeholder: '#D9DEE0'
  },
  error: {
    main: '#f14f50'
  },
  color
}

const breakpoints = createBreakpoints({})

const spacing = 10

const borderRadius = {
  primary: 8,
  secondary: 4
}

const shadow = {
  default: '0 6px 18px 0 rgba(0, 0, 0, 0.06)',
  standard: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  contrast: '0 6px 16px 0 rgba(0, 0, 0, 0.09)',
  subtle: '0 0 2px 0 rgba(0, 0, 0, 0.05)',
  defaultTop: '0 6px 18px 0 rgba(0, 0, 0, 0.06)',
  light: {
    main: '0 6px 10px 0 rgba(0, 0, 0, 0.05)',
    xShift: '5px 6px 10px 0 rgba(0, 0, 0, 0.05)',
    yShift: '0 8px 8px 0 rgba(0, 0, 0, 0.1)'
  },
  dark: '0 2px 10px rgba(0, 0, 0, 0.35)',
  text: '0 0 1px rgba(0,0,0, 0.1)'

}

const transition = {
  button: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  default: '0.2s ease'
}

const mixins = {
  bgImage (image) {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
  },
  scrollbarHide: {
    msOverflowStyle: 'none', // IE
    scrollbarWidth: 'none', // Firefox

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}

const typography = {
  fontFamily: 'Arial',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  letterSpacing: {
    default: '0.75px'
  },

  h1: {
    fontSize: '32px',
    lineHeight: '36px',
    fontWeight: 700,
    color: palette.secondary.main
  },

  h2: {
    fontSize: '26px',
    lineHeight: '30px',
    fontWeight: 600,
    color: palette.secondary.main
  },

  h3: {
    fontSize: '18px',
    color: palette.secondary.main,
    lineHeight: '34px',
    letterSpacing: '0.75px',
    fontWeight: 600
  },

  h4: {
    fontSize: '13px',
    lineHeight: '24px',
    letterSpacing: '0.75px',
    fontWeight: 400,
    color: palette.secondary.pale
  },

  h5: {
    fontSize: '18px',
    lineHeight: '30px',
    letterSpacing: '1.35px',
    fontWeight: 300,
    color: palette.secondary.main
  },

  h6: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '18px',
    letterSpacing: '0.75px',
    color: palette.secondary.main
  },

  subtitle1: {
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: 1.67,
    color: palette.secondary.pale,
    letterSpacing: '0.75px'
  },

  subtitle2: {
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '16px',
    color: palette.secondary.main,
    fontWeight: 600,
    letterSpacing: '0.75px'
  },

  body1: {
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.75px',
    color: palette.secondary.main
  },

  body2: {
    fontFamily: 'inherit',
    fontSize: '16px',
    lineHeight: '18px',
    letterSpacing: '0.75px',
    color: palette.secondary.light
  },

  caption: {
    fontFamily: 'inherit',
    fontSize: '13px',
    lineHeight: '15px',
    fontWeight: 600,
    color: palette.secondary.main
  },

  subheading: {
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: '16px',
    color: palette.secondary.main
  }
}

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body': {
        color: palette.secondary.main,
        fontFamily: typography.fontFamily,
        fontSize: '13px',
        letterSpacing: typography.letterSpacing.default,
        height: '100%',
        textSizeAdjust: '100%',
        width: '100%'
      },

      body: {
        backgroundColor: palette.background.paper
      },

      a: {
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer'
      },

      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0
      },

      '#root': {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },

      img: {
        display: 'block',
        maxWidth: '100%',
        border: 0
      },

      'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus input:-webkit-autofill, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
        borderRadius: borderRadius.primary,
        border: 'none !important',
        WebkitTextFillColor: `${palette.background.dark} !important`,
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s'
      },

      /* Chrome, Safari, Edge, Opera */
      'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },

      /* Firefox */
      'input[type=number]': {
        MozAppearance: 'textfield'
      },

      '::placeholder': {
        fontWeight: typography.fontWeightRegular
      }
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        transition: transition.button,
        fontFamily: 'inherit',
        fontSize: '14px',
        textAlign: 'inherit',
        letterSpacing: 'inherit',

        '&:hover': {
          color: palette.secondary.main
        },

        '&.MuiMenuItem-root': {
          minHeight: 40
        }
      }
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: '20px',
        width: 40,
        height: 40,
        padding: 0,
        borderRadius: '50%',

        '&:hover': {
          color: palette.primary.main
        },

        '& svg': {
          flexShrink: 0
        }
      },

      colorSecondary: {
        backgroundColor: palette.color.red.main,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',

        '&:active': {
          boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
        },

        '&:hover': {
          backgroundColor: palette.color.red.main
        }
      },

      sizeSmall: {
        width: 15,
        height: 15,
        padding: 0,

        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    }
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      color: 'primary'
    },

    styleOverrides: {
      root: {
        height: 40,
        borderRadius: borderRadius.primary,
        color: palette.secondary.light,
        fontSize: '14px',
        lineHeight: '14px',
        fontWeight: typography.fontWeightSemiBold,
        letterSpacing: '0.75px',
        padding: '9px 28px',
        textTransform: 'none',
        transition: `color 0.2s ease,
          background-color 0.2s ease
          box-shadow 0.2s ease`,

        '&$disabled': {
          backgroundColor: palette.color.grey.light,
          color: palette.secondary.pale,
          boxShadow: 'none'
        }
      },

      contained: {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.main,
        boxShadow: 'none',

        '&$disabled': {
          backgroundColor: palette.color.grey.light,
          color: palette.secondary.pale
        },

        '&:hover': {
          backgroundColor: palette.primary.main,
          boxShadow: 'none'
        }
      },

      containedPrimary: {
        backgroundColor: palette.primary.main,

        '&:disabled': {
          color: palette.primary.contrastText,
          backgroundColor: palette.primary.disabled
        },

        '&:hover': {
          color: palette.primary.contrastText,
          backgroundColor: palette.primary.hover
        },

        '&:active, &:focus': {
          boxShadow: shadow.dark
        }
      },

      text: {
        padding: '12px 16px',
        color: palette.primary.main,

        '&:hover': {
          backgroundColor: palette.primary.light
        }
      },

      outlined: {
        border: `2px solid ${palette.primary.main}`,

        '&:hover': {
          border: `2px solid ${palette.primary.main}`
        }
      },

      textPrimary: {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.main,
        boxShadow: 'none',

        '& path': {
          transition: transition.default
        },

        '&:active': {
          color: palette.primary.contrastText,
          boxShadow: 'none'
        },

        '&:hover': {
          color: palette.primary.contrastText,
          boxShadow: 'none',
          backgroundColor: palette.primary.hover
        },

        '&:disabled': {
          backgroundColor: palette.primary.disabled,
          color: palette.primary.contrastText,

          '& path': {
            fill: palette.primary.contrastText
          }
        }
      },

      textSecondary: {
        color: palette.primary.main,
        backgroundColor: 'transparent',

        '&:hover': {
          color: palette.primary.main,
          backgroundColor: palette.primary.pale
        }
      },

      sizeSmall: {
        fontSize: '12px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        padding: '5px 8px'
      },

      sizeLarge: {
        minHeight: 44,
        minWidth: 180,
        fontSize: '15px',
        lineHeight: '15px',
        padding: '10px 40px',
        fontWeight: typography.fontWeightSemiBold
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 14,
        fontSize: '12px',
        color: palette.secondary.pale,
        fontWeight: typography.fontWeightSemiBold,
        position: 'absolute',
        top: '100%',
        left: 0
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      elevation: {
        boxShadow: shadow.default
      },

      elevation2: {
        boxShadow: shadow.standard
      },

      rounded: {
        borderRadius: borderRadius.secondary
      }
    }
  },
  MuiInput: {
    styleOverrides: {
      root: {
        transition: 'border 0.2s ease',
        borderRadius: borderRadius.primary
      },

      underline: {
        '&::before': {
          borderWidth: 2
        }
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        lineHeight: '14px',

        '&.MuiFilledInput-root.Mui-disabled': {
          opacity: 1,
          backgroundColor: palette.background.light,
          borderColor: palette.color.grey.main,

          '&:hover': {
            backgroundColor: palette.background.light,
            borderColor: palette.color.grey.main
          }
        }
      },

      input: {
        fontWeight: typography.fontWeightMedium
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        left: 2,
        lineHeight: 1.67
      },

      shrink: {
        transform: 'translate(13px, 7px) scale(0.85)'
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.paper,
        borderRadius: borderRadius.primary,
        border: `2px solid ${palette.secondary.pale}`,
        transition: 'border-color 0.2s ease, background-color 0.2s ease',

        '&:hover': {
          borderColor: palette.primary.dark,
          backgroundColor: palette.background.paper
        },

        '&.Mui-focused': {
          borderColor: palette.primary.dark,
          backgroundColor: palette.background.paper
        },

        '&.Mui-disabled': {
          opacity: 0.5
        },

        '&.Mui-error': {
          borderColor: palette.color.red.light,
          backgroundColor: palette.color.error.background
        }
      },

      input: {
        fontSize: '15px',
        height: 'auto'
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.primary
      }
    }
  },
  MuiFormControl: {
    defaultProps: {
      fullWidth: true,
      margin: 'normal'
    },

    styleOverrides: {
      marginNormal: {
        marginBottom: 30
      },

      marginDense: {
        marginBottom: 20
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      outlined: {
        minHeight: 'unset',
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 13,
        borderRadius: borderRadius.primary,
        backgroundColor: palette.background.paper
      },

      icon: {
        top: '50%',
        transform: 'translate3d(0, -50%, 0)'
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        color: palette.secondary.main,
        fontSize: '14px',
        letterSpacing: 'inherit',

        '& .MuiListItemIcon-root': {
          minWidth: 24,
          marginRight: 8
        },

        '&$selected': {
          fontWeight: typography.fontWeightMedium,
          backgroundColor: palette.background.default,
          color: palette.primary.main
        }
      },

      gutters: {
        paddingLeft: 14
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.secondary
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& > * > *:first-of-type': {
          borderRadius: '4px 0 0 0',

          '&:after': {
            left: 0
          }
        },

        '& > * > *': {
          borderBottom: `1px solid ${palette.background.dirty}`
        },

        '& > * > *:last-child': {
          borderRadius: '0 4px 0 0',
          paddingRight: 10
        }
      }
    }
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:not(.MuiTableRow-head):hover': {
          '& > *': {
            color: palette.secondary.main,

            '&:not(:last-child) path:not(.no-hover)': {
              fill: palette.secondary.main
            }
          }
        },

        '&:not(.MuiTableRow-head):last-child > *': {
          borderBottom: 0
        }
      }
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '& > *:last-child > *:first-of-type': {
          borderRadius: '0 0 0 4px'
        },

        '& > *:last-child > *:last-child': {
          borderRadius: '0 0 4px 0'
        }
      }
    }
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        letterSpacing: 'inherit',
        transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',

        '&:focus': {
          color: palette.primary.main
        },

        '&:hover': {
          color: palette.primary.main
        },

        '&$active': {
          color: palette.primary.main,

          '& .icon': {
            color: palette.primary.main
          }
        }
      },

      icon: {
        position: 'absolute',
        right: -15
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        padding: '16px 10px',
        borderBottomColor: palette.background.dirty,
        backgroundColor: palette.background.paper
      },

      head: {
        fontWeight: typography.fontWeightSemiBold,
        color: palette.secondary.main,
        backgroundColor: palette.background.paper,
        fontSize: '13px',
        lineHeight: '20px',
        padding: spacing,
        borderBottomColor: palette.background.dirty,

        '&$stickyHeader': {
          backgroundColor: palette.background.paper
        }
      },

      paddingCheckbox: {
        padding: '0 10px 0 20px'
      },

      body: {
        color: palette.secondary.pale
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 0
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.color.grey.light
      }
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.MuiInputLabel-root:not(.Mui-error).Mui-focused': {
          color: palette.primary.dark
        },

        '&.Mui-error': {
          color: palette.error.main
        }
      }
    }
  },
  MuiTab: {
    defaultProps: {
      textColor: 'primary'
    },

    styleOverrides: {
      root: {
        fontSize: '14px',
        letterSpacing: '0.75px',
        textTransform: 'none',
        fontWeight: typography.fontWeightSemiBold,
        borderRadius: 20,
        minHeight: 'unset',
        minWidth: 'unset',

        [breakpoints.up('sm')]: {
          fontSize: '14px',
          minWidth: 'unset'
        }
      },

      textColorInherit: {
        color: palette.secondary.main,

        '&$selected': {
          color: palette.primary.main
        },

        '&$disabled': {
          color: palette.secondary.pale
        }
      }
    }
  },

  PrivateTabIndicator: {
    styleOverrides: {
      colorSecondary: {
        backgroundColor: palette.primary.main
      }
    }
  },

  MuiListItemSecondaryAction: {
    styleOverrides: {
      root: {
        right: 26
      }
    }
  },

  MuiButtonGroup: {
    styleOverrides: {
      grouped: {
        transition: 'all 0.2s ease'
      },

      groupedTextPrimary: {
        backgroundColor: palette.background.light,
        boxShadow: 'none',
        color: palette.secondary.light,

        '&:hover': {
          color: palette.primary.main,
          backgroundColor: palette.primary.light
        },

        '&:active': {
          boxShadow: 'none'
        },

        '&:focus': {
          boxShadow: 'none'
        },

        '&:not(:last-child)': {
          borderColor: palette.secondary.pale
        }
      }
    }
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.primary
      },

      action: {
        paddingLeft: 8
      }
    }
  },
  MuiCircularProgress: {
    styleOverrides: {
      colorPrimary: {
        color: palette.primary.main
      },

      colorSecondary: {
        color: palette.background.light
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 'unset'
      },

      indicator: {
        display: 'none'
      },

      scrollButtons: {
        '&.Mui-disabled': {
          opacity: 1,

          '&:after': {
            opacity: 0
          },

          '& svg': {
            opacity: 0.3
          }
        }
      }
    }
  },
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        color: palette.secondary.pale,
        backgroundColor: palette.background.dirty
      }
    }
  },
  MuiPopover: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },

      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        maxWidth: 320,
        borderRadius: borderRadius.secondary,
        padding: 12,
        fontSize: '12px',
        lineHeight: '18px',
        color: palette.secondary.main,
        whiteSpace: 'pre-line',
        fontWeight: typography.fontWeightMedium,
        backgroundColor: palette.background.paper,
        boxShadow: shadow.default
      }
    }
  },
  MuiSwitch: {
    styleOverrides: {
      switchBase: {
        transition: 'color 0.2s ease',

        '&:hover': {
          color: palette.primary.dark
        }
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paperWidthSm: {
        minWidth: 560,
        maxWidth: 620
      },

      paperWidthMd: {
        minWidth: 640,
        maxWidth: 720
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        lineHeight: '26px',
        textAlign: 'center',
        fontWeight: typography.fontWeightLight
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 0,
        marginBottom: 24,
        textAlign: 'center',
        fontSize: '28px',
        lineHeight: '34px',
        fontWeight: typography.fontWeightBold
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 24,

        '& > :not(:first-of-type)': {
          marginLeft: 0
        },

        '& > *': {
          padding: '12px 16px'
        },

        '& > *:first-of-type': {
          marginBottom: 8
        }
      }
    }
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '& .MuiFilledInput-root': {
          paddingLeft: 10,

          '& .MuiAutocomplete-endAdornment': {
            right: 8,
            top: 'calc(50% - 20px)'
          }
        }
      },

      tag: {
        marginLeft: 2
      },

      clearIndicator: {
        borderRadius: borderRadius.primary
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        margin: '12px 0',
        borderRadius: borderRadius.primary,
        boxShadow: 'none',

        '&.Mui-expanded': {
          margin: '12px 0'
        },

        '&:before': {
          display: 'none'
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 42,
        padding: '0 16px',
        borderRadius: borderRadius.primary,
        fontWeight: typography.fontWeightSemiBold,

        '&.Mui-expanded': {
          minHeight: 42
        }
      },

      content: {
        '&.Mui-expanded': {
          margin: '13px 0'
        }
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '0 16px 10px'
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      label: {
        fontSize: '13px'
      }
    }
  }
}

const theme = createTheme({
  breakpoints,
  borderRadius,
  mixins,
  components,
  palette,
  shadow,
  spacing,
  transition,
  typography
})

// if (process.env.NODE_ENV === 'development') {
//   console.log('theme:', theme)
// }

export default theme
