import * as React from 'react'
import { lorem } from 'faker'

import About from '.'

import json from '../../__fixtures__/json/about.json'
import { createLayoutProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'pages/About',
}

export const component: StoryProps = () => {
  const contents = lorem.paragraphs()
  const title = lorem.word()
  return <About {...createLayoutProps()} contents={contents} title={title} />
}

component.story = {
  name: 'default',
}

export const regression: StoryProps = () => {
  const contents = json.content
  const title = json.title
  return <About {...createLayoutProps()} contents={contents} title={title} />
}

regression.story = {
  name: 'regression',
}

export default story
