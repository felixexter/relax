import React, { PureComponent } from 'react'
import pt from 'prop-types'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Stepper from './'
import stepsMock from './Stepper.mock'

const handleClick = action('onClick')

class StepperWrapper extends PureComponent {
  static propTypes = {
    component: pt.func,
    steps: pt.arrayOf(pt.string),
  }

  static defaultProps = {
    component: () => null,
    steps: [],
  }
  state = {
    step: 1,
  }

  handleClick = step => {
    this.setState({ step })
  }

  render() {
    const { steps, component: Component } = this.props
    const { step } = this.state

    return (
      <Component
        step={step}
        steps={steps}
        onClick={this.handleClick}
      />
    )
  }
}

storiesOf('Stepper', module)
  .add('Default', () =>
    <Stepper />
  )
  .add('2 steps', () => (
    <Stepper
      step={1}
      steps={stepsMock.slice(0, 2)}
      onClick={handleClick}
    />
  ))
  .add('3 steps', () => (
    <Stepper
      step={2}
      steps={stepsMock.slice(0, 3)}
      onClick={handleClick}
    />
  ))
  .add('4 steps', () => (
    <Stepper
      step={2}
      steps={stepsMock.slice(0, 4)}
      onClick={handleClick}
    />
  ))
  .add('5 steps', () => (
    <Stepper
      step={3}
      steps={stepsMock}
      onClick={handleClick}
    />
  ))
  .add('StepperWrapper', () => (
    <StepperWrapper
      steps={stepsMock}
      component={Stepper}
    />
  ))
