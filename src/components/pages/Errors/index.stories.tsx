import * as React from 'react'
import { storiesOf } from '@storybook/react'

import NotFound from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'

storiesOf('pages/NotFound', module).add('default', () => (
  <NotFound {...createLayoutProps()} />
))
