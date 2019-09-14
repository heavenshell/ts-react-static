import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { lorem } from 'faker'

import Home from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'

storiesOf('pages/Home', module).add('default', () => {
  const posts = Array.from(new Array(3), () => ({
    title: lorem.text(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.sentences(),
  }))

  return (
    <Home
      {...createLayoutProps()}
      onPostLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        action('onPostLinkClick')(e.target)
      }}
      posts={posts}
    />
  )
})
