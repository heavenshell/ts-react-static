import * as React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import TestProvider, { Props } from './TestProvider'

const renderHookWithWrapper = <P, R>(
  callback: (props: P) => R,
  { paths, search, hash }: Props,
  renderHookOptions?: {
    initialProps?: P
    wrapper?: React.ComponentType<P>
  }
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
