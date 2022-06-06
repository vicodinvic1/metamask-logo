export default function ({ borderRadius }) {
  return {
    paper: {
      borderRadius: borderRadius.primary
    },

    default: {
      padding: 14
    },

    dense: {
      padding: 10
    },

    none: {
      padding: 0
    }
  }
}
