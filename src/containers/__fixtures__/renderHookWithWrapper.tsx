import * as React from 'react'
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks'

import TestProvider, { Props } from './TestProvider'

const renderHookWithWrapper = <P, R>(
  callback: (props: P) => R,
  { paths, search, hash }: Props,
  renderHookOptions?: Omit<RenderHookOptions<P>, 'wrapper'>
) =>
  renderHook(callback, {
    wrapper: ({ children }) => (
      <TestProvider
        paths={paths}
        search={search}
        hash={hash}
        render={() => children}
      />
    ),
    ...renderHookOptions,
  })

export default renderHookWithWrapper
