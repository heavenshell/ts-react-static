import * as React from 'react'
import { useRouteData } from 'react-static'
import { withRouter } from 'react-router-dom'

import PostsComponent from '../../components/pages/Posts'
import { useHandlers } from '../hooks/useHandlers'
import { useStateHandlers } from '../hooks/useStateHandlers'
import { PostProps } from '../../types'

const Posts = withRouter(({ history }) => {
  const { posts } = useRouteData<{ posts: PostProps[] }>()
  const {
    onAboutLinkClick,
    onHomeLinkClick,
    onPostLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  } = useHandlers({ history })

  const { isDarkTheme, onThemeChange } = useStateHandlers({ history })

  return (
    <PostsComponent
      posts={posts}
      onAboutLinkClick={onAboutLinkClick}
      onHomeLinkClick={onHomeLinkClick}
      onPostLinkClick={onPostLinkClick}
      onPostsLinkClick={onPostsLinkClick}
      onGitHubIconClick={onGitHubIconClick}
      onTwitterIconClick={onTwitterIconClick}
      onReactStaticLinkClick={onReactStaticLinkClick}
      isDarkTheme={isDarkTheme}
      onThemeChange={onThemeChange}
    />
  )
})

export default Posts
