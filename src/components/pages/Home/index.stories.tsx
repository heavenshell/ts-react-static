import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { lorem } from 'faker'

import Home from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'pages/Home',
}

export const component: StoryProps = () => {
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
}

component.story = {
  name: 'default',
}

export default story
