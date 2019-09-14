import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { lorem } from 'faker'

import Post from '.'

import { createLayoutProps } from '../../__fixtures__/createLayout'

storiesOf('pages/Post', module)
  .add('default', () => {
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
  })
  .add('first', () => {
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
  })
  .add('last', () => {
    const post = {
      title: lorem.text(),
      slug: lorem.slug(),
      date: new Date(),
      contents: lorem.paragraphs(),
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
        next={undefined}
        prev={prev}
      />
    )
  })
