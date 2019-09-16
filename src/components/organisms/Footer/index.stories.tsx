import * as React from 'react'

import Footer from '.'

import { createFooterProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'organisms/Footer',
}

export const component: StoryProps = () => <Footer {...createFooterProps()} />

component.story = {
  name: 'default',
}

export default story
