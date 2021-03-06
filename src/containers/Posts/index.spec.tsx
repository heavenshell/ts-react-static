import * as React from 'react'
import { mount } from 'enzyme'

import Posts from '.'

import { Props as PostsProps } from '../../components/pages/Posts'
import TestProvider from '../__fixtures__/TestProvider'
import { createMockHandlers } from '../__fixtures__/createMockHandlers'
import { createMockStateHandlers } from '../__fixtures__/createMockStateHandlers'

describe('<Posts />', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should set to props', () => {
    const wrapper = mount<PostsProps>(
      <TestProvider component={Posts} paths={['/posts/']} />
    )

    const {
      posts,
      isDarkTheme,
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper.find(Posts).children().props()

    expect(posts.length).toBe(5)
    expect(isDarkTheme).toBeFalsy()
    expect(onAboutLinkClick).toBeInstanceOf(Function)
    expect(onHomeLinkClick).toBeInstanceOf(Function)
    expect(onGitHubIconClick).toBeInstanceOf(Function)
    expect(onPostLinkClick).toBeInstanceOf(Function)
    expect(onPostsLinkClick).toBeInstanceOf(Function)
    expect(onReactStaticLinkClick).toBeInstanceOf(Function)
    expect(onTwitterIconClick).toBeInstanceOf(Function)
    expect(onThemeChange).toBeInstanceOf(Function)
  })

  it('should handle events', () => {
    const {
      mockAboutLinkClick,
      mockGitHubIconClick,
      mockHomeLinkClick,
      mockPostLinkClick,
      mockPostsLinkClick,
      mockReactStaticLinkClick,
      mockTwitterIconClick,
    } = createMockHandlers()

    const { mockThemeChanage } = createMockStateHandlers({ isDarkTheme: false })

    const wrapper = mount<PostsProps>(
      <TestProvider component={Posts} paths={['/posts/']} />
    )

    const {
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper.find(Posts).children().props()

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    } as any // eslint-disable-line @typescript-eslint/no-explicit-any

    onAboutLinkClick(e)
    expect(mockAboutLinkClick).toHaveBeenCalledTimes(1)

    onGitHubIconClick(e)
    expect(mockGitHubIconClick).toHaveBeenCalledTimes(1)

    onHomeLinkClick(e)
    expect(mockHomeLinkClick).toHaveBeenCalledTimes(1)

    onPostsLinkClick(e)
    expect(mockPostsLinkClick).toHaveBeenCalledTimes(1)

    onPostLinkClick(e, '/foo/')
    expect(mockPostLinkClick).toHaveBeenCalledTimes(1)
    expect(mockPostLinkClick).toHaveBeenCalledWith(e, '/foo/')

    onReactStaticLinkClick(e)
    expect(mockReactStaticLinkClick).toHaveBeenCalledTimes(1)

    onTwitterIconClick(e)
    expect(mockTwitterIconClick).toHaveBeenCalledTimes(1)

    onThemeChange(e, true)
    expect(mockThemeChanage).toHaveBeenCalledTimes(1)
    expect(mockThemeChanage).toHaveBeenCalledWith(e, true)

    onThemeChange(e, false)
    expect(mockThemeChanage).toHaveBeenCalledTimes(2)
    expect(mockThemeChanage).toHaveBeenCalledWith(e, false)
  })
})
