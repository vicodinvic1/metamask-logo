import { MAX_WIDTH as CONTAINER_MAX_WIDTH } from 'components/Container/styles'

import { SIDEBAR_MAX_WIDTH } from 'layouts/Main/Sidebar/styles'

const DEFAULT_OFFSET = 36

export default ({ palette, shadow }, isSidebarOpen) => {
  return {
    root: {
      position: 'fixed',
      top: 0,
      backgroundColor: palette.background.light,
      zIndex: 100,
      paddingRight: DEFAULT_OFFSET,
      paddingLeft: DEFAULT_OFFSET,
      transition: `width 0.2s ease,
        box-shadow 0.2s ease,
        background-color 0.2s ease`,
      width: `calc(100% - ${
        isSidebarOpen
          ? SIDEBAR_MAX_WIDTH
          : DEFAULT_OFFSET + 32}px)`,

      '& > *': {
        height: '100%'
      },

      '&:after': {
        width: CONTAINER_MAX_WIDTH,
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate3d(-50%, 0, 0)',
        content: '""',
        display: 'block',
        height: 8,
        boxShadow: shadow.light.yShift,
        transition: 'opacity 0.2s ease',
        opacity: 0
      }
    },

    withShadow: {
      '&:after': {
        opacity: 1
      }
    }
  }
}
