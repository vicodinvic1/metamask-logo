import React from 'react'

import Box from 'components/Box'
import Typography from 'components/Typography'

function SectionHead (props) {
  const { children, title, ...restProps } = props

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      minHeight={40}
      width='100%'
      {...restProps}
    >
      <Typography variant='h1'>
        {title}
      </Typography>

      {children && (
        <div>
          {children}
        </div>
      )}
    </Box>
  )
}

export default SectionHead
