import * as React from 'react'
import styled from '@emotion/styled'
import NoSsr from '@material-ui/core/NoSsr'
import MaterialSwitch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar'
import BrightnessIcon from '@material-ui/icons/Brightness3'
import WbSunny from '@material-ui/icons/WbSunny'

type ViewProps = {
  isDarkTheme: boolean
}

type ActionProps = {
  onHomeLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onAboutLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPostsLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onThemeChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void
}

type SwitchProps = ViewProps & Pick<ActionProps, 'onThemeChange'>

export type Props = ViewProps & ActionProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledToolbar = styled(Toolbar as any)`
  padding-left: 0px;
  padding-right: 0px;
`

const StyledDiv = styled.div`
  flex-grow: 2;
  padding: 8px;
  display: block;
`

const A = styled.a`
  margin-right: 0.625em;
`

const WrappedIcons = styled.span`
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`

const Menu: React.FC<Omit<
  ActionProps,
  'onThemeChange' | 'onThemeToggle'
>> = React.memo(({ onHomeLinkClick, onAboutLinkClick, onPostsLinkClick }) => (
  <StyledDiv>
    <A onClick={onHomeLinkClick}>Home</A>
    <A onClick={onAboutLinkClick}>About</A>
    <A onClick={onPostsLinkClick}>Posts</A>
  </StyledDiv>
))

const Switch: React.FC<SwitchProps> = React.memo(
  ({ isDarkTheme, onThemeChange }) => (
    <NoSsr>
      <WrappedIcons>
        <MaterialSwitch
          value="isDarkTheme"
          color="default"
          checked={isDarkTheme}
          onChange={onThemeChange}
        />
        {isDarkTheme ? <BrightnessIcon /> : <WbSunny />}
      </WrappedIcons>
    </NoSsr>
  )
)

const Header: React.FC<Props> = React.memo(
  ({
    isDarkTheme,
    onHomeLinkClick,
    onAboutLinkClick,
    onPostsLinkClick,
    onThemeChange,
  }) => {
    return (
      <StyledToolbar disableGutters={true}>
        <Menu
          onAboutLinkClick={onAboutLinkClick}
          onHomeLinkClick={onHomeLinkClick}
          onPostsLinkClick={onPostsLinkClick}
        />
        <Switch isDarkTheme={isDarkTheme} onThemeChange={onThemeChange} />
      </StyledToolbar>
    )
  }
)

export default Header
