import React from 'react'

import Box from 'components/Box'
import Button from 'components/Button'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError (e) {
    return { hasError: true }
  }

  handleButtonClick () {
    window.location.href = window.location.origin
  }

  render () {
    if (this.state.hasError) {
      return (
        <Box
          height='calc(100vh - 16px)' // subtract body default margin-bottom/top 8px
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
          <h1>
            Oops, something went wrong...
          </h1>

          <br />

          <Button onClick={this.handleButtonClick} size='large'>
            Go to homepage
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
