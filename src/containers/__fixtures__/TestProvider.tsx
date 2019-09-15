import * as React from 'react'
import { MemoryRouter, Route, Switch, RouteProps } from 'react-router-dom'
import { MemoryRouterProps, WithRouterStatics } from 'react-router'
import { createMemoryHistory } from 'history'

type RouterInitialProps = {
  pathname: string
  params?: RouteProps
  hash?: string
  search?: string
  paths?: string[]
  initialPath?: string
}

export type Props = MemoryRouterProps &
  RouterInitialProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: React.ComponentClass & WithRouterStatics<any>
    render?: RouteProps['render']
  }

const TestProvider = ({
  component: Component,
  pathname,
  hash = '',
  search = '',
  paths = [],
  initialPath,
  render,
}: Props) => {
  const history = createMemoryHistory()
  const mockHistoryPush = jest.fn().mockName('history.push')
  history.push = mockHistoryPush
  const location = {
    pathname,
    hash,
    search,
    state: undefined,
  }
  const match = {
    params: {},
    isExact: false,
    path: '/',
    url: '/',
  }

  if (Component) {
    return (
      <MemoryRouter>
        <React.Suspense fallback={<div>loading</div>}>
          <Component.WrappedComponent
            history={history}
            location={location}
            match={match}
          />
        </React.Suspense>
      </MemoryRouter>
    )
  }

  const initialEntries: MemoryRouterProps['initialEntries'] = paths.map(
    path => ({ pathname: path, search })
  )
  const initialIndex = initialPath ? paths.indexOf(initialPath) : 0

  return (
    <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
      <Switch>
        {paths.map(path => (
          <Route key={path} path={path} component={Component} render={render} />
        ))}
      </Switch>
    </MemoryRouter>
  )
}

export default TestProvider
