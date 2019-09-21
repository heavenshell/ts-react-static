import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { lorem } from 'faker'

import Post from '.'

import json from '../../__fixtures__/json/post.json'
import next from '../../__fixtures__/json/next.json'
import prev from '../../__fixtures__/json/prev.json'
import { createLayoutProps } from '../../__fixtures__/createLayout'
import { StoryProps } from '../../../types'

const story = {
  title: 'pages/Post',
}

export const component: StoryProps = () => {
  const post = {
    title: lorem.text(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.paragraphs(),
  }

  const next = {
    title: lorem.sentence(),
    slug: lorem.slug(),
  }

  const prev = {
    title: lorem.sentence(),
    slug: lorem.slug(),
  }

  return (
    <Post
      {...createLayoutProps()}
      onPostLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        action('onPostLinkClick')(e.target)
      }}
      post={post}
      next={next}
      prev={prev}
    />
  )
}

component.story = {
  name: 'default',
}

export const first: StoryProps = () => {
  const post = {
    title: lorem.text(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.paragraphs(),
  }
  const next = {
    title: lorem.sentence(),
    slug: lorem.slug(),
  }

  return (
    <Post
      {...createLayoutProps()}
      onPostLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        action('onPostLinkClick')(e.target)
      }}
      post={post}
      next={next}
      prev={undefined}
    />
  )
}

first.story = {
  name: 'first',
}

export const last: StoryProps = () => {
  const post = {
    title: lorem.text(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.paragraphs(),
  }

  return (
    <Post
      {...createLayoutProps()}
      onPostLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        action('onPostLinkClick')(e.target)
      }}
      post={post}
      next={undefined}
      prev={prev}
    />
  )
}

last.story = {
  name: 'last',
}

export const regression: StoryProps = () => {
  const post = {
    ...json,
    date: new Date(json.date),
  }

  const prev = {
    title: lorem.sentence(),
    slug: lorem.slug(),
  }

  return (
    <Post
      {...createLayoutProps()}
      onPostLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        action('onPostLinkClick')(e.target)
      }}
      post={post}
      next={next}
      prev={prev}
    />
  )
}

regression.story = {
  name: 'regression',
}

export default story
