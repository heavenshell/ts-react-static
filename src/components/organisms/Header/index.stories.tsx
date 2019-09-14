import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

import { createHeaderProps } from '../../__fixtures__/createLayout'

storiesOf('organisms/Header', module).add('default', () => (
  <Header {...createHeaderProps()} />
))
