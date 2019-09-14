import { scroller } from 'react-scroll'
import { createMemoryHistory } from 'history'
import { renderHook } from '@testing-library/react-hooks'

import { useScroll } from './useScroll'

describe('useScroll', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('useScroll', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const spy = jest.spyOn(scroller, 'scrollTo')
    spy.mockImplementation(to => to)

    const location = {
      hash: '#foo',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toBeCalled()
    expect(scroller.scrollTo).toHaveBeenCalledTimes(1)
    expect(scroller.scrollTo).toHaveBeenCalledWith('foo', { smooth: false })
  })

  it('useScroll - encoded hash value', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const spy = jest.spyOn(scroller, 'scrollTo')
    spy.mockImplementation(to => to)

    const location = {
      hash: '#foo%20bar%20baz',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toBeCalled()
    expect(scroller.scrollTo).toHaveBeenCalledTimes(1)
    expect(scroller.scrollTo).toHaveBeenCalledWith('foo bar baz', {
      smooth: false,
    })
  })

  it('useScroll - no hash value', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const spy = jest.spyOn(scroller, 'scrollTo')
    spy.mockImplementation(to => to)

    const location = {
      hash: '',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toHaveBeenCalledTimes(0)
  })

  it('useScroll - not startwith hash', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    const spy = jest.spyOn(scroller, 'scrollTo')
    spy.mockImplementation(to => to)

    const location = {
      hash: '/#/foo',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toHaveBeenCalledTimes(0)
  })
})
