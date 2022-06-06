import withProps from 'recompose/withProps'

import Link from 'components/Link'

export default () => withProps(({ to, href }) => {
  if (to || href) {
    return {
      component: Link
    }
  }
})
