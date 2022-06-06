import Select from '@mui/material/Select'
import defaultProps from 'recompose/defaultProps'

export default defaultProps({
  MenuProps: {
    disableScrollLock: true
  }
})(Select)
