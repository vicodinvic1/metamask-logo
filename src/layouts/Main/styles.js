export default ({ breakpoints }) => {
  return {
    root: {
      display: 'flex',
      minWidth: breakpoints.values.md,
      minHeight: '100vh',
      maxHeight: '100vh'
    }
  }
}
