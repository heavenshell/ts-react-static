import React from 'react'
import path from 'path'

import { reloadClientData } from 'react-static/node'
import chokidar from 'chokidar'
import marked from 'marked'
import jdown from 'jdown'
import SanitizeState from 'marked-sanitizer-github'
import emoji from 'node-emoji'
import prism from 'prismjs'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-vim'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
if (process.env.REACT_STATIC_ENV === 'development') {
  chokidar.watch('contents', {
    depth: 5,
    usePolling: true,
  }).on('all', data => {
    return reloadClientData()
  })
}

/**
 * @type { [key: string]: string }
 */
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
}

const createRenderer = () => {
  const renderer = new marked.Renderer()
  renderer.heading = (text, level) => {
    const escapedText = text.toLowerCase().replace(/[\s+,.*+?^${}()|[\]\\]+/g, '-')
    return `
      <h${level} id="${escapedText}">
        <a class="anchor" href="#${escapedText}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
          </svg>
        </a>
        <span>${text}</span>
      </h${level}>`
  }
  renderer.link = (href, title, text) => {
    return `
      <a href="${href}" title="${title ? title : text}" target="_blank" rel="nofollow noopener">
        ${text}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26" class="icon">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
        </svg>
      </a>
    `
  }
  renderer.text = text => {
    return text.replace(/(:.*:)/g, (match) => emoji.emojify(match))
  }

  return renderer
}

const config = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  maxThreads: 1,
  basePath: '/',
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),
  getRoutes: async () => {
    const renderer = createRenderer()
    const { about, home, posts: contents } = await jdown('contents', {
      fileInfo: true,
      markdown: {
        renderer,
        sanitize: true,
        sanitizer: new SanitizeState().getSanitizer(),
        headerPrefix: 'user-content-',
        highlight: (code /*: string */, lang /*: string */) => {
          const languages = lang ? prism.languages[lang] : ''
          return prism.highlight(
            lang
              ? code
              : code.replace(/[&<>"'\/]/g, key =>
                  key in entityMap ? entityMap[key] : key
                ),
            languages,
            lang
          )
        },
      },
    })

    // Sort by created date
    const posts = contents.sort((a, b) => (
      a.date < b.date ? 1 : -1
    ))

    return [
      {
        path: '/',
        template: 'src/containers/Home',
        getData: () => ({
          posts: posts.slice(0, 3), // Show 3 entries.
        }),
      },
      {
        path: '/about/',
        template: 'src/containers/About',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/posts/',
        template: 'src/containers/Posts',
        getData: () => ({
          posts,
        }),
        children: posts.map((post, i) => {
          const prevId = i + 1
          const nextId = i - 1
          const prev = prevId in posts
            ? { slug: posts[prevId].slug, title: posts[prevId].title }
            : undefined
          const next = nextId in posts
            ? { slug: posts[nextId].slug, title: posts[nextId].title }
            : undefined

          return {
            path: `/${post.slug}`,
            template: 'src/containers/Post',
            getData: () => ({
              post,
              prev,
              next,
            }),
          }
        }),
      },
      {
        path: '404',
        template: 'src/containers/Errors',
      }
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-typescript'),
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
    'material-ui',
    [
      require.resolve('react-static-plugin-mdx'),
      {
        includePaths: [path.resolve('./slides')],
        extensions: ['.md', '.mdx'],
      }
    ]
  ],
}

export default config
