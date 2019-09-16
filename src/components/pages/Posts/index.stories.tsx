import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { lorem } from 'faker'

import Posts from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'pages/Posts',
}

export const component: StoryProps = () => {
  const posts = Array.from(new Array(5), () => ({
    title: lorem.sentence(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.sentence(),
  }))

  return (
    <Posts
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
