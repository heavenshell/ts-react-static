import * as React from 'react'
import convert from 'htmr'
import marked from 'marked'
import emoji from 'node-emoji'
import prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
// eslint-disable-next-line import/no-unresolved
import '!style-loader!css-loader!prismjs/themes/prism-okaidia.css'

import { StyledMarkdown } from '.'

import { StoryProps } from '../../../types'

const story = {
  title: 'atoms/StyledMarkdown',
}

export const component: StoryProps = () => {
  const md = `
    <h2 id="hello">
      <a class="anchor" href="#hello">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
      </a>
      <span>Hello</span>
    </h2>
    <h3 id="world">
      <a class="anchor" href="#hello">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
      </a>
      <span>World</span>
    </h2>
  `
  return (
    <StyledMarkdown style={{ marginLeft: '24px' }}>
      {convert(md)}
    </StyledMarkdown>
  )
}

component.story = {
  name: 'default',
}

export const style: StoryProps = () => {
  const renderer = new marked.Renderer()
  renderer.text = (text) => {
    return text.replace(/(:.*:)/g, (match) => emoji.emojify(match))
  }
  marked.setOptions({
    renderer,
    gfm: true,
  })

  const md = `
  ## Table

  | foo | bar |
  |:----|:----|
  | foo | bar |
  | foo | bar |

  ## List

  - foo
    - bar
      - baz
  - foo
  - foo
    - bar


  ## Emoji

  - :the_horns:
  - :guitar:
  - :camera:
  - :cat:
  `

  return (
    <StyledMarkdown style={{ marginLeft: '24px' }}>
      {convert(marked(md))}
    </StyledMarkdown>
  )
}

style.story = {
  name: 'style',
}

export const codeblock: StoryProps = () => {
  // If static.config.js can use from TypeScript, use it.
  const entityMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  }

  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer,
    gfm: true,
    highlight: (code: string, lang: string) => {
      const languages = lang ? prism.languages[lang] : prism.languages['ts']
      return prism.highlight(
        lang ? code : code.replace(/[&<>"'\/]/g, (key) => entityMap[key]),
        languages,
        lang
      )
    },
  })

  const ts = `
  \`\`\`typescript
  import * as React from 'react'

  export const Hello = () => <h1>Hello</h1>
  \`\`\`
  `

  const py = `
  \`\`\`python
  import os

  def main():
      print(os.path.dirname(__file__))

  if __name__ == '__main__':
      main()
  \`\`\`
  `

  const markdowns = [ts, py]

  return (
    <React.Fragment>
      {markdowns.map((md, i) => (
        <StyledMarkdown
          key={`${i}`}
          style={{ marginLeft: '24px', background: 'black' }}
        >
          {convert(marked(md))}
        </StyledMarkdown>
      ))}
    </React.Fragment>
  )
}

codeblock.story = {
  name: 'codeblock',
}

export default story
