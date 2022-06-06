import React from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'

import Container from 'components/Container'

import {
  SIDEBAR_MAX_WIDTH,
  SIDEBAR_MIN_WIDTH
} from 'layouts/Main/Sidebar/styles'

import { toolbarHeight as toolbarHeightAtom } from 'constants/atoms'

import useClasses from 'hooks/useClasses'
import useRecoilState from 'hooks/useRecoilState'
import useSelector from 'hooks/useSelector'

import styles from './styles'
import {
  MainLayoutToolbarPortalContext,
  MainLayoutToolbarSecondaryPortalContext
} from '../context'
import ToolbarWrapper from './Toolbar'

const DEFAULT_OFFSET = 56

function MainLayoutWrapper (props) {
  const { isSidebarOpen, children } = props

  const classes = useClasses(styles)
  const [toolbarPortal, setToolbarPortal] = React.useState(null)
  const [toolbarSecondaryPortal, setToolbarSecondaryPortal] = React.useState(null)
  const [toolbarHeight, setToolbarHeight] = useRecoilState(toolbarHeightAtom)
  const activity = useSelector(state => state.activity)
  const isActivityPanelOpen = activity.isPanelOpen

  const offsetLeft = isSidebarOpen
    ? SIDEBAR_MAX_WIDTH
    : SIDEBAR_MIN_WIDTH

  const childrenBottomIndent = ACTIVITY_PANEL_HEIGHT + DEFAULT_OFFSET

  const handleToolbarHeightChange = React.useCallback(
    rect => {
      if (toolbarHeight !== rect.bounds.height) {
        setToolbarHeight(rect.bounds.height)
      }
    },
    [toolbarHeight]
  )

  const handleToolbarPortalRefSet = React.useCallback(
    toolbarPortal => setToolbarPortal(toolbarPortal),
    []
  )

  const handleToolbarSecondaryPortalRefSet = React.useCallback(
    toolbarPortal => setToolbarSecondaryPortal(toolbarPortal),
    []
  )

  return (
    <>
      <div
        className={classes.root}
        style={{ paddingLeft: offsetLeft, paddingTop: toolbarHeight }}
      >
        <Measure bounds onResize={handleToolbarHeightChange}>
          {({ measureRef }) => (
            <ToolbarWrapper isSidebarOpen={isSidebarOpen}>
              <div ref={measureRef}>
                <div className={classes.toolbar}>
                  <Container className={classes.toolbarContainer}>
                    <div ref={handleToolbarPortalRefSet} />

                    <div ref={handleToolbarSecondaryPortalRefSet} />
                  </Container>
                </div>
              </div>
            </ToolbarWrapper>
          )}
        </Measure>

        <div
          className={classes.children}
          style={{
            paddingBottom: isActivityPanelOpen
              ? childrenBottomIndent
              : DEFAULT_OFFSET
          }}
        >
          <MainLayoutToolbarPortalContext.Provider value={toolbarPortal}>
            <MainLayoutToolbarSecondaryPortalContext.Provider value={toolbarSecondaryPortal}>
              {children}
            </MainLayoutToolbarSecondaryPortalContext.Provider>
          </MainLayoutToolbarPortalContext.Provider>
        </div>
      </div>
    </>
  )
}

MainLayoutWrapper.propTypes = {
  children: PropTypes.element.isRequired
}

export default MainLayoutWrapper
