import { createMemoryHistory } from 'history'
import { renderHook } from '@testing-library/react-hooks'

import { useHandlers } from './useHandlers'

describe('useHandlers', () => {
  const originalWindowLocationAssign = location.assign
  afterEach(() => {
    location.assign = originalWindowLocationAssign
    jest.restoreAllMocks()
  })

  it('onHomeLinkClick', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onHomeLinkClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onHomeLinkClick(e as any)
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith('/')
  })

  it('onAboutLinkClick', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onAboutLinkClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onAboutLinkClick(e as any)
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith('/about/')
  })

  it('onPostsLinkClick', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onPostsLinkClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPostsLinkClick(e as any)
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith('/posts/')
  })

  it('onPostLinkClick', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onPostLinkClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPostLinkClick(e as any, '/foo/')
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith('/foo/')
  })

  it('onGitHubIconClick', () => {
    location.assign = jest.fn().mockName('location.assign')
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onGitHubIconClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onGitHubIconClick(e as any)
    expect(location.assign).toHaveBeenCalledWith(
      'https://github.com/heavenshell/'
    )
  })

  it('onTwitterIconClick', () => {
    location.assign = jest.fn().mockName('location.assign')
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onTwitterIconClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onTwitterIconClick(e as any)
    expect(location.assign).toHaveBeenCalledWith(
      'https://twitter.com/heavenshell/'
    )
  })

  it('onReactStaticLinkClick', () => {
    location.assign = jest.fn().mockName('location.assign')
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useHandlers({ history }))
    const { onReactStaticLinkClick } = result.current

    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onReactStaticLinkClick(e as any)
    expect(location.assign).toHaveBeenCalledWith(
      'https://github.com/react-static/react-static/'
    )
  })
})
