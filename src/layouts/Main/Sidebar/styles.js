export const SIDEBAR_MIN_WIDTH = 68
export const SIDEBAR_MAX_WIDTH = 256

export default ({ palette }, open) => {
  return {
    root: {
      position: 'fixed',
      backgroundColor: palette.secondary.main,
      height: '100vh',
      zIndex: 101,
      flexShrink: 0,
      boxShadow: '6px 0 18px 0 rgba(0, 0, 0, 0.06)',
      width: open ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH,
      transition: 'width 0.2s ease'
    },

    content: {
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      padding: '22px 8px 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }
}
