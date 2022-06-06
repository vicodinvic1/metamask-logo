import React from 'react'

import Box from 'components/Box'
import MetamaskLogo from 'components/MetamaskLogo'

function LoginPage (props) {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flex={1}>
      <MetamaskLogo />
    </Box>
  )
}

export default LoginPage
