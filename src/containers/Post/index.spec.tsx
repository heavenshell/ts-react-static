import * as React from 'react'
import { shallow } from 'enzyme'

import Post from '.'

import { Props as PostProps } from '../../components/pages/Post'
import TestProvider from '../__fixtures__/TestProvider'
import { createMockHandlers } from '../__fixtures__/createMockHandlers'
import { createMockStateHandlers } from '../__fixtures__/createMockStateHandlers'

describe('<Post />', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should set to props', () => {
    const wrapper = shallow(
      <TestProvider component={Post} pathname={'/posts/foo'} />,
      {
        suspenseFallback: true,
      }
    )

    const {
      post,
      next,
      prev,
      isDarkTheme,
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper
      .children()
      .children()
      .dive<PostProps, {}>()
      .props()

    expect(post).not.toBe('')
    expect(next).not.toBe('')
    expect(prev).not.toBe('')
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

    const wrapper = shallow(
      <TestProvider component={Post} pathname={'/posts/foo'} />,
      {
        suspenseFallback: true,
      }
    )

    const {
      next,
      prev,
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper
      .children()
      .children()
      .dive<PostProps, {}>()
      .props()

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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onPostLinkClick(e, next!.slug)
    expect(mockPostLinkClick).toHaveBeenCalledTimes(1)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(mockPostLinkClick).toHaveBeenCalledWith(e, next!.slug)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onPostLinkClick(e, prev!.slug)
    expect(mockPostLinkClick).toHaveBeenCalledTimes(2)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(mockPostLinkClick).toHaveBeenCalledWith(e, prev!.slug)

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
