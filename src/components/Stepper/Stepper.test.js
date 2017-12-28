import React from 'react'
import { mount } from 'enzyme'
import Stepper from './Stepper'
import StepperStep from './StepperStep'
import {
  stepOptions,
  stepsOptions,
  propError,
  stepType,
  stepsType,
} from './StepperPropTypes'
import StepperButtonStyled from './styled/StepperButtonStyled'
import steps from './Stepper.mock'

const componentName = 'Stepper'

describe('Stepper', () => {
  it('should simulate click event', () => {
    const onClick = jest.fn()

    const wrapper = mount(
      <Stepper
        step={3}
        steps={steps}
        onClick={onClick}
      />
    )

    wrapper
      .find(StepperStep)
      .filter({ step: 4 })
      .find(StepperButtonStyled)
      .simulate('click')

    expect(onClick.mock.calls[0][0]).toBe(4)
  })
})

describe('StepperPropTypes / stepType', () => {
  const propName = 'step'

  const step = (props, options) =>
    stepType(options)(props, propName, componentName)

  const expectError = error =>
    propError(propName, componentName, error)

  it('should not pass without props', () => {
    const props = {}
    const error = step(props)
    const expected = expectError('Expected a number.')

    expect(error).toEqual(expected)
  })

  it('should pass with correct props', () => {
    const props = {
      step: 1,
      steps: ['1', '2'],
    }

    expect(step(props)).toBeNull()
  })

  it('should not pass with min value greater than step', () => {
    const props = {
      step: 0,
      steps: ['1', '2'],
    }

    const expected = expectError(
      `Minimum value is ${stepOptions.min} but got ${props.step}.`
    )

    expect(step(props)).toEqual(expected)
  })

  it('should not pass with max value lower than step', () => {
    const props = {
      step: 6,
      steps: ['1', '2'],
    }

    const expected = expectError(
      `Maximun value is ${stepOptions.max} but got ${props.step}.`
    )

    expect(step(props)).toEqual(expected)
  })

  it('should not pass with steps array length lower than step', () => {
    const props = {
      step: 3,
      steps: ['1', '2'],
    }

    const expected = expectError(
      'Value has to equal or be lower than ' +
      `'${stepOptions.stepsPropName}' array length ${props.steps.length} ` +
      `but got ${props.step}. ` +
      `Or '${stepOptions.stepsPropName}' array length has to be greater ` +
      `than '${propName}' value.`
    )

    expect(step(props)).toEqual(expected)
  })

  it('should pass with correct props with min option', () => {
    const props = {
      step: 2,
      steps: ['1', '2', '3'],
    }

    const options = {
      min: 2,
    }

    expect(step(props, options)).toBeNull()
  })

  it('should pass with correct props with max option', () => {
    const props = {
      step: 3,
      steps: ['1', '2', '3'],
    }

    const options = {
      max: 3,
    }

    expect(step(props, options)).toBeNull()
  })

  it('should pass with correct props with stepsPropName option', () => {
    const props = {
      step: 2,
      steps: ['1', '2', '3'],
    }

    const options = {
      stepsPropName: 'stepsPropName',
    }

    expect(step(props, options)).toBeNull()
  })
})

describe('StepperPropTypes / stepsType', () => {
  const propName = 'steps'

  const checkSteps = (props, options) =>
    stepsType(options)(props, propName, componentName)

  const expectError = error =>
    propError(propName, componentName, error)

  it('should not pass without props', () => {
    const props = {}
    const error = checkSteps(props)
    const expected = expectError('Expected an array of strings.')

    expect(error).toEqual(expected)
  })

  it('should pass with correct props', () => {
    const props = {
      steps: ['1', '2'],
    }

    expect(checkSteps(props)).toBeNull()
  })

  it('should not pass with min length greater than steps length', () => {
    const props = {
      steps: ['1'],
    }

    const expected = expectError(
      `Minimum array length is ${stepsOptions.min} ` +
      `but got ${props.steps.length}.`
    )

    expect(checkSteps(props)).toEqual(expected)
  })

  it('should not pass with max length lower than steps length', () => {
    const props = {
      steps: ['1', '2', '3', '4', '5', '6'],
    }

    const expected = expectError(
      `Maximun array lenght is ${stepsOptions.max} ` +
      `but got ${props.steps.length}.`
    )

    expect(checkSteps(props)).toEqual(expected)
  })

  it('should pass with correct props with min option', () => {
    const props = {
      steps: ['1', '2', '3'],
    }

    const options = {
      min: 3,
    }

    expect(checkSteps(props, options)).toBeNull()
  })

  it('should pass with correct props with max option', () => {
    const props = {
      steps: ['1', '2', '3'],
    }

    const options = {
      max: 3,
    }

    expect(checkSteps(props, options)).toBeNull()
  })
})

describe('StepperPropTypes / propError', () => {
  const propName = 'step'

  it('should return error without params', () => {
    const error = propError()
    const expected = new Error('Invalid prop \'\' supplied to \'\'. ')

    expect(error).toEqual(expected)
  })

  it('should return error with params', () => {
    const errorMessage = 'Error message.'
    const error = propError(propName, componentName, errorMessage)
    const expected = new Error(
      `Invalid prop '${propName}' supplied to '${componentName}'. ` +
      `${errorMessage}`
    )

    expect(error).toEqual(expected)
  })
})
