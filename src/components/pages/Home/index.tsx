import * as React from 'react'
import styled from '@emotion/styled'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import dayjs from 'dayjs'

import Layout, { Props as LayoutProps } from '../../templates/Layout'
import { Post as PostProps } from '../../../types'

type ViewProps = {
  posts: PostProps[]
}

type ActionProps = {
  onPostsLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPostLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void
}

export type Props = ViewProps & ActionProps & LayoutProps

const StyledBox = styled.div`
  display: flex;
  margin: 0px;
  margin-top: 8px;
  padding: 0px;
  align-items: center;
`

const StyledInnerBox = styled.div`
  margin-left: 8px;
`

const StyledH1 = styled.h1`
  margin-left: 8px;
  font-size: 1.5em;
`

const StyledDiv = styled.div`
  margin-top: 16px;
`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledHr = styled.hr<any>`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${props =>
    props.theme['palette']['type'] === 'rgba(255, 255, 255, 0.12)'
      ? '#FFFFFF'
      : 'rgba(0, 0, 0, 0.12)'};
`

const Home: React.FC<Props> = React.memo(({ posts, ...props }) => (
  <Layout {...props}>
    <StyledH1>Recent posts</StyledH1>
    <StyledHr />
    <StyledDiv>
      {posts.map(post => (
        <div key={post.slug}>
          <a onClick={e => props.onPostLinkClick(e, `/posts/${post.slug}`)}>
            <StyledBox>
              <StyledInnerBox>
                <CalendarTodayIcon />
              </StyledInnerBox>
              <StyledInnerBox>
                {dayjs(post.date).format('YYYY-MM-DD')}
              </StyledInnerBox>
              <StyledInnerBox>{post.title}</StyledInnerBox>
            </StyledBox>
          </a>
        </div>
      ))}
      <StyledBox>
        <StyledInnerBox>
          <a onClick={props.onPostsLinkClick}>More...</a>
        </StyledInnerBox>
      </StyledBox>
    </StyledDiv>
  </Layout>
))

export default Home
