import * as React from 'react'
import styled from '@emotion/styled'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import dayjs from 'dayjs'

import Layout, { Props as LayoutProps } from '../../templates/Layout'
import { Post as PostProps } from '../../../types'

type ViewProps = {
  posts: PostProps[]
}

type ActionProps = {
  onPostLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void
}

export type Props = ViewProps & ActionProps & LayoutProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledBox = styled(Box as any)`
  display: flex;
  margin: 0px;
  margin-top: 8px;
  padding: 0px;
`

const StyledH1 = styled.h1`
  margin-left: 8px;
  font-size: 1.5em;
`

const StyledDiv = styled.div`
  margin-top: 16px;
`

const StyledDateSpan = styled.span`
  white-space: nowrap;
`

const StyledTitleSpan = styled.span`
  margin-left: 8px;
  text-overflow: ellipsis;
`

const EntryList: React.FC<ViewProps & ActionProps> = React.memo(
  ({ posts, onPostLinkClick }) => (
    <React.Fragment>
      <StyledH1>Posts</StyledH1>
      <Divider />
      <StyledDiv>
        {posts.map(post => (
          <div key={post.slug}>
            <StyledBox alignItems="center">
              <Box marginLeft={1}>
                <CalendarTodayIcon />
              </Box>
              <Box marginLeft={1}>
                <a onClick={e => onPostLinkClick(e, `/posts/${post.slug}`)}>
                  <StyledDateSpan>
                    {dayjs(post.date).format('YYYY-MM-DD')}
                  </StyledDateSpan>
                  <StyledTitleSpan>{post.title}</StyledTitleSpan>
                </a>
              </Box>
            </StyledBox>
          </div>
        ))}
      </StyledDiv>
    </React.Fragment>
  )
)

const Posts: React.FC<Props> = React.memo(({ posts, ...props }) => {
  return (
    <Layout {...props}>
      <EntryList posts={posts} onPostLinkClick={props.onPostLinkClick} />
    </Layout>
  )
})

export default Posts
