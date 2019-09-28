import * as React from 'react'
import { mount } from 'enzyme'

import About from '.'

import { Props as AboutProps } from '../../components/pages/About'
import TestProvider from '../__fixtures__/TestProvider'
import { createMockHandlers } from '../__fixtures__/createMockHandlers'
import { createMockStateHandlers } from '../__fixtures__/createMockStateHandlers'

describe('<About />', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should set to props', () => {
    const wrapper = mount<AboutProps>(
      <TestProvider component={About} paths={['/about/']} hash={'#about'} />
    )

    const {
      title,
      contents,
      isDarkTheme,
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper
      .find(About)
      .children()
      .props()

    expect(title).not.toBe('')
    expect(contents).not.toBe('')
    expect(isDarkTheme).toBeFalsy()
    expect(onAboutLinkClick).toBeInstanceOf(Function)
    expect(onHomeLinkClick).toBeInstanceOf(Function)
    expect(onGitHubIconClick).toBeInstanceOf(Function)
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
      mockPostsLinkClick,
      mockReactStaticLinkClick,
      mockTwitterIconClick,
    } = createMockHandlers()

    const { mockThemeChanage } = createMockStateHandlers({ isDarkTheme: false })

    const wrapper = mount<AboutProps>(
      <TestProvider component={About} paths={['/about/']} hash={'#about'} />
    )

    const {
      onAboutLinkClick,
      onGitHubIconClick,
      onHomeLinkClick,
      onPostsLinkClick,
      onReactStaticLinkClick,
      onTwitterIconClick,
      onThemeChange,
    } = wrapper
      .find(About)
      .children()
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
