import * as React from 'react'
import { useHistory } from 'react-router-dom'

import NotFoundComponent from '../../components/pages/Errors'
import { useHandlers } from '../hooks/useHandlers'
import { useStateHandlers } from '../hooks/useStateHandlers'

const NotFound = () => {
  const history = useHistory()

  const {
    onHomeLinkClick,
    onAboutLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  } = useHandlers({ history })

  const { isDarkTheme, onThemeChange } = useStateHandlers({ history })

  return (
    <NotFoundComponent
      onHomeLinkClick={onHomeLinkClick}
      onAboutLinkClick={onAboutLinkClick}
      onPostsLinkClick={onPostsLinkClick}
      onGitHubIconClick={onGitHubIconClick}
      onTwitterIconClick={onTwitterIconClick}
      onReactStaticLinkClick={onReactStaticLinkClick}
      isDarkTheme={isDarkTheme}
      onThemeChange={onThemeChange}
    />
  )
}

export default NotFound
