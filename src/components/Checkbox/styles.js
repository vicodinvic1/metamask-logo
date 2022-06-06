export default ({ palette }) => {
  return {
    root: {
      '&.Mui-checked:hover circle, &.MuiCheckbox-indeterminate:hover circle': {
        fill: palette.primary.dark
      }
    }
  }
}
