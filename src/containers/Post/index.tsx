import * as React from 'react'
import { useRouteData } from 'react-static'
import { useHistory, useLocation } from 'react-router-dom'

import PostComponent from '../../components/pages/Post'
import { useHandlers } from '../hooks/useHandlers'
import { useStateHandlers } from '../hooks/useStateHandlers'
import { useScroll } from '../hooks/useScroll'
import { PostProps, NextProps, PrevProps } from '../../types'

type Props = {
  post: PostProps
  next?: NextProps
  prev?: PrevProps
}

const Post = () => {
  const history = useHistory()
  const location = useLocation()
  const { post, prev, next } = useRouteData<Props>()

  const {
    onAboutLinkClick,
    onHomeLinkClick,
    onPostLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  } = useHandlers({
    history,
  })

  useScroll({ history, location })

  const { isDarkTheme, onThemeChange } = useStateHandlers({ history })
  return (
    <PostComponent
      onAboutLinkClick={onAboutLinkClick}
      onHomeLinkClick={onHomeLinkClick}
      onPostLinkClick={onPostLinkClick}
      onPostsLinkClick={onPostsLinkClick}
      onGitHubIconClick={onGitHubIconClick}
      onTwitterIconClick={onTwitterIconClick}
      onReactStaticLinkClick={onReactStaticLinkClick}
      isDarkTheme={isDarkTheme}
      onThemeChange={onThemeChange}
      post={post}
      prev={prev}
      next={next}
    />
  )
}

export default Post
