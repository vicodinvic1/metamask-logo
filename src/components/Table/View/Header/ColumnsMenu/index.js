import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/Box'
import ButtonIcon from 'components/Button/Icon'
import Popover from 'components/Popover'

import DotsIcon from 'icons/Dots'

import useCurrentTarget from 'hooks/useCurrentTarget'
import useClasses from 'hooks/useClasses'

import styles from './styles'
import ColumnsMenuItem from './Item'

function TableViewColumnsMenu (props) {
  const {
    currentColumns,
    onColumnShowChange,
    show,
    visibleColumnsCount
  } = props

  const classes = useClasses(styles)

  const [anchorEl, setAnchorEl, resetAnchorEl] = useCurrentTarget()

  if (!show) {
    return null
  }

  const colsMaxShowLimit = 6
  const colsMinShowLimit = 4
  const maxLimit = visibleColumnsCount >= colsMaxShowLimit
  const minLimit = visibleColumnsCount <= colsMinShowLimit
  const min = minLimitReached(minLimit)
  const max = maxLimitReached(maxLimit)
  const maxLimitTooltipTitle = `A maximum of ${colsMaxShowLimit} items can only be selected`
  const minLimitTooltipTitle = `A minimum of ${colsMinShowLimit} items should be selected`
  const isMenuItemDisabled = createIsMenuItemDisabled(minLimit, maxLimit)

  return (
    <>
      <ButtonIcon className={classes.button} onClick={setAnchorEl}>
        <DotsIcon color={anchorEl ? 'primary.main' : 'secondary.main'} />
      </ButtonIcon>

      <Popover
        className={classes.popover}
        anchorEl={anchorEl}
        onClose={resetAnchorEl}
        open={!!anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box display='flex' flexDirection='column' minWidth={220}>
          {currentColumns.map((column, index) => {
            const minTooltipTitle = min(column.visible) && minLimitTooltipTitle
            const maxTooltipTitle = max(column.visible) && maxLimitTooltipTitle
            const disabled = column.static || isMenuItemDisabled(column.visible)
            const tooltipTitle = column.static
              ? 'This column cannot be hidden'
              : maxTooltipTitle || minTooltipTitle

            return (
              <ColumnsMenuItem
                checked={column.visible}
                disabled={disabled}
                key={index}
                label={column.name}
                onClick={onColumnShowChange(column, disabled)}
                tooltipTitle={tooltipTitle}
              />
            )
          })}
        </Box>
      </Popover>
    </>
  )
}

function maxLimitReached (limit) {
  return visible => limit && !visible
}

function minLimitReached (limit) {
  return visible => limit && visible
}

function createIsMenuItemDisabled (minLimit, maxLimit) {
  return visible => {
    return !!(
      minLimitReached(minLimit)(visible) ||
      maxLimitReached(maxLimit)(visible)
    )
  }
}

TableViewColumnsMenu.propTypes = {
  currentColumns: PropTypes.array.isRequired,
  onColumnShowChange: PropTypes.func.isRequired,
  show: PropTypes.bool,
  visibleColumnsCount: PropTypes.number.isRequired
}

export default React.memo(TableViewColumnsMenu)
