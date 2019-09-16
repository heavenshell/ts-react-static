import * as React from 'react'

import Header from '.'

import { StoryProps } from '../../../types'
import { createHeaderProps } from '../../__fixtures__/createLayout'

const story = {
  title: 'organisms/Header',
}

export const component: StoryProps = () => <Header {...createHeaderProps()} />

component.story = {
  name: 'default',
}

export default story
