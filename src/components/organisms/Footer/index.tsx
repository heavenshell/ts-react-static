import * as React from 'react'
import styled from '@emotion/styled'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import GitHubIcon from '../../atoms/GitHubIcon'
import TwitterIcon from '../../atoms/TwitterIcon'

type ActionProps = {
  onGitHubIconClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onTwitterIconClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onReactStaticLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export type Props = ActionProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledFooter = styled.footer<any>`
  padding: ${props => props.theme.spacing(6, 0)}px;
  margin-top: ${props => props.theme.spacing(4)}px;
  margin-bottom: ${props => props.theme.spacing(4)}px;
`

const StyledA = styled.a`
  margin-right: 8px;
`

const StyledTextSecondary = styled.p`
  text-align: center;
`

const Footer: React.FC<Props> = React.memo(
  ({ onGitHubIconClick, onTwitterIconClick, onReactStaticLinkClick }) => {
    return (
      <StyledFooter>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            <StyledA onClick={onGitHubIconClick} rel="noopener">
              <GitHubIcon />
            </StyledA>
            <StyledA onClick={onTwitterIconClick} rel="noopener">
              <TwitterIcon />
            </StyledA>
          </Typography>
          <StyledTextSecondary>
            Copyright © {new Date().getFullYear()} Shinya Ohyanagi build with{' '}
            <a onClick={onReactStaticLinkClick}>react-static</a>
          </StyledTextSecondary>
        </Container>
      </StyledFooter>
    )
  }
)

export default Footer
