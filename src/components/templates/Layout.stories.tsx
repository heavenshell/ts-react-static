import * as React from 'react'
import { text } from '@storybook/addon-knobs'

import Layout from './Layout'

import {
  createFooterProps,
  createHeaderProps,
} from '../__fixtures__/createLayout'
import { StoryProps } from '../../types'

const story = {
  title: 'templates/Layout',
}

const component: StoryProps = () => (
  <Layout {...createFooterProps()} {...createHeaderProps()}>
    <div style={{ padding: '8px' }}>{text('children', 'lorem ipsum')}</div>
  </Layout>
)

component.story = {
  name: 'default',
}

export default story
