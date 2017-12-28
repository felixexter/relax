import React, { PureComponent } from 'react'
import pt from 'prop-types'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { stepType, stepsType } from './StepperPropTypes'
import StepperStyled from './styled/StepperStyled'
import StepperStep from './StepperStep'

const stepPropType = stepType()
const stepsPropType = stepsType()

export default class Stepper extends PureComponent {
  static propTypes = {
    step: stepPropType,
    steps: stepsPropType,
    onClick: pt.func,
  }

  static defaultProps = {
    step: 1,
    steps: ['Start', 'Finish'],
    onClick: emptyFunction,
  }

  renderStep = (name, i) => {
    const { step } = this.props
    const currentStep = i + 1
    const isActive = currentStep <= step
    const isCurrent = currentStep === step
    const isDisabled = isCurrent || Math.abs(currentStep - step) > 1

    return (
      <StepperStep
        key={i}
        isActive={isActive}
        isCurrent={isCurrent}
        isDisabled={isDisabled}
        step={currentStep}
        onClick={this.props.onClick}
      >
        {name}
      </StepperStep>
    )
  }

  render() {
    return (
      <StepperStyled>
        {this.props.steps.map(this.renderStep)}
      </StepperStyled>
    )
  }
}
