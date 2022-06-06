export default function (_, reverse) {
  return {
    root: {
      flexDirection: reverse ? 'row-reverse' : 'row'
    },

    icon: {
      display: 'flex',
      flexShrink: 0,
      marginRight: reverse ? 10 : 0,
      marginLeft: reverse ? 0 : 10
    }
  }
}
