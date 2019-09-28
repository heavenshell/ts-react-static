import * as React from 'react'
import { MemoryRouter, Route, Switch, RouteProps } from 'react-router-dom'
import { MemoryRouterProps } from 'react-router'

type RouterInitialProps = {
  paths?: string[]
  search?: string
  hash?: string
  initialPath?: string
}

export type Props = MemoryRouterProps &
  RouterInitialProps & {
    component?: () => JSX.Element
    render?: RouteProps['render']
  }

const TestProvider = ({
  component: Component,
  hash = '',
  search = '',
  paths = [],
  initialPath,
  render,
}: Props) => {
  const initialEntries: MemoryRouterProps['initialEntries'] = paths.map(
    path => ({ pathname: path, search, hash })
  )
  const initialIndex = initialPath ? paths.indexOf(initialPath) : 0

  if (Component) {
    return (
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        <React.Suspense fallback={<div>loading</div>}>
          <Component />
        </React.Suspense>
      </MemoryRouter>
    )
  }

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
