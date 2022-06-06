import { INVOICE_ACTION_TYPE } from 'constants/action'

export default ({ palette }) => {
  return {
    [INVOICE_ACTION_TYPE.COMPUTE_TELCO_INVOICE]: {
      backgroundColor: palette.color.blue.main
    },

    [INVOICE_ACTION_TYPE.COMPUTE_SERVICE_INVOICE]: {
      backgroundColor: palette.color.orange.main
    }
  }
}
