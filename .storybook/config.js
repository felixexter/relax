import React from 'react'
import { configure } from '@storybook/react'

const context = require.context('../src/components', true, /\.story\.js$/)

const loadStories = () =>
  context.keys().forEach(module => context(module))

configure(loadStories, module)
