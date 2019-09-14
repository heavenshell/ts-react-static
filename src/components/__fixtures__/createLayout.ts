import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

export const createHeaderProps = () => {
  return {
    isDarkTheme: boolean('isDarkTheme', false),
    onHomeLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onHomeLinkClick')(e.target),
    onAboutLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onAboutLinkClick')(e.target),
    onPostsLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onPostLinkClick')(e.target),
    onThemeChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      action('onThemeChange')(e.target),
    onThemeToggle: (e: React.MouseEvent<HTMLButtonElement>) =>
      action('onThemeToggle')(e.target),
  }
}

export const createFooterProps = () => {
  return {
    onGitHubIconClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onGitHubIconClick')(e.target),
    onTwitterIconClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onTwitterIconClick')(e.target),
    onReactStaticLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      action('onReactStaticLinkClick')(e.target),
  }
}

export const createLayoutProps = () => ({
  ...createHeaderProps(),
  ...createFooterProps(),
})
