import * as React from 'react'
import { text } from '@storybook/addon-knobs'
import { lorem } from 'faker'

import Layout from './Layout'

import {
  createFooterProps,
  createHeaderProps,
} from '../__fixtures__/createLayout'
import json from '../__fixtures__/json/layout.json'
import { StoryProps } from '../../types'

const story = {
  title: 'templates/Layout',
}

export const component: StoryProps = () => (
  <Layout {...createFooterProps()} {...createHeaderProps()}>
    <div style={{ padding: '8px' }}>{text('children', lorem.paragraphs())}</div>
  </Layout>
)

component.story = {
  name: 'default',
}

export const regression: StoryProps = () => {
  return (
    <Layout {...createFooterProps()} {...createHeaderProps()}>
      <div style={{ padding: '8px' }}>{json.children}</div>
    </Layout>
  )
}

regression.story = {
  name: 'regression',
}

export default story
