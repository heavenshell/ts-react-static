import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider as StyledThemeProvider } from 'emotion-theming'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'

import Header, { Props as HeaderProps } from '../organisms/Header'
import Footer, { Props as FooterProps } from '../organisms/Footer'
import { getTheme } from '../../theme'

export type Props = HeaderProps & FooterProps

const globalStyle = css`
  * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue,
      Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif;
  }
  pre {
    background: black;
    color: white;
    text-align: initial;
    max-width: 100%;
    padding: 1em 1.5em;
    margin-bottom: 1.725em;
    overflow: auto;
    word-wrap: normal;
  }
  a {
    cursor: pointer;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
  ul,
  ol {
    margin-left: 0px;
  }
  ul li {
    padding-left: 0px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledDiv = styled.div<any>`
  background-color: ${props => props.theme.color};
  padding-top: 2px;
  padding-bottom: 8px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledHr = styled.hr<any>`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${props =>
    props.theme['palette']['type'] === 'dark'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.12)'};
`

const Layout: React.FC<Props> = React.memo(
  ({
    onHomeLinkClick,
    onAboutLinkClick,
    onPostsLinkClick,
    onGitHubIconClick,
    onTwitterIconClick,
    onReactStaticLinkClick,
    isDarkTheme,
    onThemeChange,
    children,
  }) => {
    const theme = React.useMemo(() => getTheme(isDarkTheme), [isDarkTheme])

    return (
      <div>
        <StyledThemeProvider theme={theme}>
          <MaterialThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <CssBaseline />
            <Container maxWidth="md">
              <Header
                onAboutLinkClick={onAboutLinkClick}
                onHomeLinkClick={onHomeLinkClick}
                onPostsLinkClick={onPostsLinkClick}
                isDarkTheme={isDarkTheme}
                onThemeChange={onThemeChange}
              />
              <StyledHr />
              <StyledDiv>{children}</StyledDiv>
            </Container>
            <Footer
              onGitHubIconClick={onGitHubIconClick}
              onTwitterIconClick={onTwitterIconClick}
              onReactStaticLinkClick={onReactStaticLinkClick}
            />
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </div>
    )
  }
)

export default Layout
