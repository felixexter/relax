export const stepOptions = {
  min: 1,
  max: 5,
  stepsPropName: 'steps',
}

export const stepsOptions = {
  min: 2,
  max: 5,
}

export const propError = (
  propName = '',
  componentName = '',
  error = '',
) => {
  const message = (
    `Invalid prop '${propName}' supplied to ` +
    `'${componentName}'. ${error}`
  )

  return new Error(message)
}

export const stepType = ({
  stepsPropName = stepOptions.stepsPropName,
  min = stepOptions.min,
  max = stepOptions.max,
} = stepOptions) => {
  const stepTypeChecker = (props, propName, componentName) => {
    const value = props[propName]

    if (typeof value !== 'number')
      return propError(propName, componentName, 'Expected a number.')

    let error

    if (value < min)
      error = `Minimum value is ${min} but got ${value}.`

    if (value > max)
      error = `Maximun value is ${max} but got ${value}.`

    const steps = props[stepsPropName]

    if (!error && Array.isArray(steps) && (value > steps.length)) {
      error = (
        'Value has to equal or be lower than ' +
        `'${stepsPropName}' array length ${steps.length} but got ${value}. ` +
        `Or '${stepsPropName}' array length has to be greater ` +
        `than '${propName}' value.`
      )
    }

    if (!error) return null

    return propError(propName, componentName, error)
  }

  return stepTypeChecker
}

// istanbul ignore next
const isNotString = string =>
  typeof string !== 'string'

// istanbul ignore next
const isArrayOfString = array =>
  Array.isArray(array) && !array.some(isNotString)

export const stepsType = ({
  min = stepsOptions.min,
  max = stepsOptions.max,
} = stepsOptions) => {
  const stepsTypeChecker = (props, propName, componentName) => {
    const steps = props[propName]

    if (!isArrayOfString(steps))
      return propError(propName, componentName, 'Expected an array of strings.')

    let error

    const { length } = steps

    if (length < min)
      error = `Minimum array length is ${min} but got ${length}.`

    if (length > max)
      error = `Maximun array lenght is ${max} but got ${length}.`

    if (!error) return null

    return propError(propName, componentName, error)
  }

  return stepsTypeChecker
}
