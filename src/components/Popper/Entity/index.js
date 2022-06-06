import React from 'react'

import Popper from 'components/Popper'

import useSelector from 'hooks/useSelector'
import useCurrentTarget from 'hooks/useCurrentTarget'
import usePromise from 'hooks/usePromise'

function EntityPopper (props) {
  const {
    action,
    children,
    entityId,
    entityKeyToCheck,
    onActionSuccess,
    selector: createSelector,
    ...restProps
  } = props

  const mounted = usePromise()

  const [anchorEl, setAnchorEl, resetAnchorEl] = useCurrentTarget()
  const [loading, setLoading] = React.useState(false)

  const selector = createSelector({ id: entityId })
  const entity = useSelector(selector)

  const isEntity = entityKeyToCheck
    ? entity?.[entityKeyToCheck]
    : entity

  const open = !!anchorEl && !loading && !!isEntity

  const handleActionDispatch = async () => {
    setLoading(true)

    return await mounted(action())
      .then(onActionSuccess)
      .finally(setLoading(false))
  }

  const handlePopperClick = React.useCallback(
    (e) => e.stopPropagation(),
    []
  )

  React.useEffect(() => {
    if (anchorEl && !isEntity) {
      handleActionDispatch()
    }
  }, [anchorEl])

  return (
    <Popper
      onMouseEnter={setAnchorEl}
      onMouseLeave={resetAnchorEl}
      autoWidth
      anchorEl={anchorEl}
      open={open}
      onClick={handlePopperClick}
      {...restProps}
    >
      {open && children(entity)}
    </Popper>
  )
}

export default EntityPopper
