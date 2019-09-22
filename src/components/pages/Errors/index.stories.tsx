import * as React from 'react'

import NotFound from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'pages/NotFound',
}

export const component: StoryProps = () => <NotFound {...createLayoutProps()} />

component.story = {
  name: 'default',
}

export const regression: StoryProps = () => (
  <NotFound {...createLayoutProps()} />
)

regression.story = {
  name: 'regression',
}

export default story
