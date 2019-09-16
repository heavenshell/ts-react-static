import * as React from 'react'

import TwitterIcon from '.'

import { StoryProps } from '../../../types'

const story = {
  title: 'atoms/TwitterIcon',
}

export const twitterIcon: StoryProps = () => <TwitterIcon />

twitterIcon.story = {
  name: 'default',
}

export default story
