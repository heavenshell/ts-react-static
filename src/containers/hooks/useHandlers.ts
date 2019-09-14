import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type UseHandlers = Pick<RouteComponentProps, 'history'>

export const useHandlers = ({ history }: UseHandlers) => {
  const onHomeLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      return history.push('/')
    },
    [history]
  )

  const onAboutLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      return history.push('/about/')
    },
    [history]
  )

  const onPostsLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      return history.push('/posts/')
    },
    [history]
  )

  const onPostLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
      e.preventDefault()
      return history.push(to)
    },
    [history]
  )

  const onGitHubIconClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      return location.assign('https://github.com/heavenshell/')
    },
    [history]
  )

  const onTwitterIconClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      return location.assign('https://twitter.com/heavenshell/')
    },
    [history]
  )

  const onReactStaticLinkClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      return location.assign('https://github.com/react-static/react-static/')
    },
    [history]
  )

  return {
    onHomeLinkClick,
    onAboutLinkClick,
    onPostsLinkClick,
    onPostLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  }
}
