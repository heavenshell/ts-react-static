import * as React from 'react'

import GitHubIcon from '.'

import { StoryProps } from '../../../types'

const story = {
  title: 'atoms/GitHubIcon',
}

export const icon: StoryProps = () => <GitHubIcon />

icon.story = {
  name: 'default',
}

export default story
