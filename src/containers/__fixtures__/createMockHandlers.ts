import * as hooks from '../hooks/useHandlers'

export const createMockHandlers = () => {
  const mockAboutLinkClick = jest.fn().mockName('onAboutLinkClick')
  const mockGitHubIconClick = jest.fn().mockName('onGitHubIconClick')
  const mockHomeLinkClick = jest.fn().mockName('onHomeLinkClick')
  const mockPostLinkClick = jest.fn().mockName('onPostLinkClick')
  const mockPostsLinkClick = jest.fn().mockName('onReactStaticLinkClick')
  const mockReactStaticLinkClick = jest.fn().mockName('onTwitterIconClick')
  const mockTwitterIconClick = jest.fn()

  const spy = jest.spyOn(hooks, 'useHandlers')
  spy.mockImplementation(() => ({
    onAboutLinkClick: mockAboutLinkClick,
    onGitHubIconClick: mockGitHubIconClick,
    onHomeLinkClick: mockHomeLinkClick,
    onPostLinkClick: mockPostLinkClick,
    onPostsLinkClick: mockPostsLinkClick,
    onReactStaticLinkClick: mockReactStaticLinkClick,
    onTwitterIconClick: mockTwitterIconClick,
  }))

  return {
    mockAboutLinkClick,
    mockGitHubIconClick,
    mockHomeLinkClick,
    mockPostLinkClick,
    mockPostsLinkClick,
    mockReactStaticLinkClick,
    mockTwitterIconClick,
  }
}
