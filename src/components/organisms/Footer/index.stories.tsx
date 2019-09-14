import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '.'

import { createFooterProps } from '../../__fixtures__/createLayout'

storiesOf('organisms/Footer', module).add('default', () => (
  <Footer {...createFooterProps()} />
))
