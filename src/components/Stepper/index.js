import React from 'react'
import PropTypes from 'prop-types'
import MUIStepper from '@mui/material/Stepper'

import Step from 'components/Stepper/Step'
import StepIcon from 'components/Stepper/Step/Icon'
import StepLabel from 'components/Stepper/Step/Label'

function Stepper (props) {
  const { steps, ...restProps } = props

  return (
    <MUIStepper {...restProps}>
      {steps.map(({ label, onClick, disabled }, index) => (
        <Step key={index}>
          <StepLabel
            StepIconComponent={({ active, completed }) => (
              <StepIcon active={active} completed={completed}>
                {index + 1}
              </StepIcon>
            )}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </MUIStepper>
  )
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired
}

export default Stepper
