import * as React from 'react'
import { lorem } from 'faker'

import About from '.'

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

export default story
