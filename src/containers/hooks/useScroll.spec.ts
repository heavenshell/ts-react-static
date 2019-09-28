import { scroller } from 'react-scroll'
import { createMemoryHistory } from 'history'
import { renderHook } from '@testing-library/react-hooks'

import { useScroll } from './useScroll'

describe('useScroll', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  const createMockElement = (id: string) => {
    const span = document.createElement('span')
    span.id = id
    document.body.appendChild(span)
    return span
  }
  const removeMockElement = (element: HTMLElement) => {
    document.body.removeChild(element)
  }

  it('useScroll', () => {
    const element = createMockElement('foo')

    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    jest.spyOn(scroller, 'scrollTo').mockImplementation(to => to)

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
    removeMockElement(element)
  })

  it('useScroll - encoded hash value', () => {
    const element = createMockElement('foo bar baz')

    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    jest.spyOn(scroller, 'scrollTo').mockImplementation(to => to)

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
    removeMockElement(element)
  })

  it('useScroll - no hash value', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    jest.spyOn(scroller, 'scrollTo').mockImplementation(to => to)

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

    jest.spyOn(scroller, 'scrollTo').mockImplementation(to => to)

    const location = {
      hash: '/#/foo',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toHaveBeenCalledTimes(0)
  })

  it('useScroll - hash does not found', () => {
    const history = createMemoryHistory()
    const mockHistoryPush = jest.fn().mockName('history.push')
    history.push = mockHistoryPush

    jest.spyOn(scroller, 'scrollTo').mockImplementation(to => to)

    const location = {
      hash: '#not_exist',
      pathname: '/posts/',
      search: '',
      state: undefined,
    }
    renderHook(() => useScroll({ history, location }))
    expect(scroller.scrollTo).toHaveBeenCalledTimes(0)
  })
})
