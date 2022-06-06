import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'
import ButtonBase from '@mui/material/ButtonBase'

import withLinkOnButton from 'hoc/withLinkOnButton'

export default compose(
  defaultProps({ focusRipple: true }),
  withLinkOnButton()
)(ButtonBase)
