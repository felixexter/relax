import initStoryshots from '@storybook/addon-storyshots'

// See issue: https://github.com/storybooks/storybook/issues/2522
jest.mock('react-dom', () => ({
  render: () => null,
  unmountComponentAtNode: () => null,
  findDOMNode: () => ({}),
}))

initStoryshots()
