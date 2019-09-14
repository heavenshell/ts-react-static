import { createMemoryHistory } from 'history'
import { act, renderHook } from '@testing-library/react-hooks'

import { useStateHandlers } from './useStateHandlers'

describe('useStateHandlers', () => {
  it('isDarkTheme - initial', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useStateHandlers({ history }))
    const { isDarkTheme } = result.current

    expect(isDarkTheme).toBeFalsy()
  })

  it('onThemeChange - to be true', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useStateHandlers({ history }))
    const { onThemeChange } = result.current
    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    act(() => onThemeChange(e as any, true))

    const { isDarkTheme } = result.current
    expect(isDarkTheme).toBeTruthy()
  })

  it('onThemeChange - to be false', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const { result } = renderHook(() => useStateHandlers({ history }))
    const { onThemeChange } = result.current
    const e = {
      preventDefault: jest.fn().mockName('preventDefault'),
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    act(() => onThemeChange(e as any, false))

    const { isDarkTheme } = result.current
    expect(isDarkTheme).toBeFalsy()
  })
})
