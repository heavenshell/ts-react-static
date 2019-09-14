import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Layout from './Layout'

import {
  createFooterProps,
  createHeaderProps,
} from '../__fixtures__/createLayout'

storiesOf('templates/Layout', module).add('default', () => (
  <Layout {...createFooterProps()} {...createHeaderProps()}>
    <div style={{ padding: '8px' }}>{text('children', 'lorem ipsum')}</div>
  </Layout>
))
