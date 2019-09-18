import * as React from 'react'
import { useRouteData } from 'react-static'
import { withRouter } from 'react-router-dom'

import AboutComponent from '../../components/pages/About'
import { useHandlers } from '../hooks/useHandlers'
import { useStateHandlers } from '../hooks/useStateHandlers'
import { useScroll } from '../hooks/useScroll'
import { PostProps } from '../../types'

const About = withRouter(({ history, location }) => {
  const { about } = useRouteData<{ about: PostProps }>()

  const {
    onHomeLinkClick,
    onAboutLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
  } = useHandlers({ history })

  useScroll({ history, location })

  const { isDarkTheme, onThemeChange } = useStateHandlers({ history })
  return (
    <AboutComponent
      title={about.title}
      contents={about.contents}
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
})

export default About
