import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { lorem } from 'faker'

import About from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'

storiesOf('pages/About', module).add('default', () => {
  const contents = lorem.paragraphs()
  const title = lorem.word()
  return <About {...createLayoutProps()} contents={contents} title={title} />
})
