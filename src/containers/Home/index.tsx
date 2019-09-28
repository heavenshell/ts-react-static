import * as React from 'react'
import { useRouteData } from 'react-static'
import { useHistory } from 'react-router'

import HomeComponent from '../../components/pages/Home'
import { useHandlers } from '../hooks/useHandlers'
import { useStateHandlers } from '../hooks/useStateHandlers'
import { PostProps } from '../../types'

const Home = () => {
  const history = useHistory()
  const { posts } = useRouteData<{ posts: PostProps[] }>()

  const {
    onHomeLinkClick,
    onAboutLinkClick,
    onPostLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  } = useHandlers({ history })

  const { isDarkTheme, onThemeChange } = useStateHandlers({ history })
  return (
    <HomeComponent
      posts={posts}
      onHomeLinkClick={onHomeLinkClick}
      onAboutLinkClick={onAboutLinkClick}
      onPostLinkClick={onPostLinkClick}
      onPostsLinkClick={onPostsLinkClick}
      onGitHubIconClick={onGitHubIconClick}
      onTwitterIconClick={onTwitterIconClick}
      onReactStaticLinkClick={onReactStaticLinkClick}
      isDarkTheme={isDarkTheme}
      onThemeChange={onThemeChange}
    />
  )
}

export default Home
