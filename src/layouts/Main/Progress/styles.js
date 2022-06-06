export default ({ zIndex }) => {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: zIndex.drawer + 1
    }
  }
}
