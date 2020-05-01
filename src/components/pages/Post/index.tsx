import * as React from 'react'
import styled from '@emotion/styled'
import Box from '@material-ui/core/Box'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import dayjs from 'dayjs'
import convert from 'htmr'

import Layout, { Props as LayoutProps } from '../../templates/Layout'
import { StyledMarkdown } from '../../atoms/StyledMarkdown'
import { PostProps, NextProps, PrevProps } from '../../../types'

type ViewProps = {
  post: PostProps
  prev?: PrevProps
  next?: NextProps
}

type ActionProps = {
  onPostLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void
}

export type Props = ViewProps & ActionProps & LayoutProps

const StyledH1 = styled.h1`
  margin-left: 8px;
  font-size: 1.5em;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledBox = styled(Box as any)`
  display: flex;
  margin: 0px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 0px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledPaginationBox = styled(Box as any)`
  display: flex;
  margin-top: 16px;
  margin-left: 8px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledHr = styled.hr<any>`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.theme['palette']['type'] === 'dark'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.12)'};
`

const Post: React.FC<Props> = React.memo(({ post, next, prev, ...props }) => {
  const item = convert(post.contents)
  return (
    <Layout {...props}>
      <StyledH1>{post.title}</StyledH1>
      <StyledBox alignItems="center">
        <Box marginLeft={1}>
          <CalendarTodayIcon />
        </Box>
        <Box marginLeft={1}>{dayjs(post.date).format('YYYY-MM-DD')}</Box>
      </StyledBox>
      <StyledHr />
      <StyledMarkdown>{item}</StyledMarkdown>
      <StyledHr />
      <StyledPaginationBox alignItems="center">
        <Box flexGrow={1}>
          {prev && (
            <a onClick={(e) => props.onPostLinkClick(e, prev.slug)}>
              {'<'} {prev.title}
            </a>
          )}
        </Box>
        <Box>
          {next && (
            <a onClick={(e) => props.onPostLinkClick(e, next.slug)}>
              {next.title} {'>'}
            </a>
          )}
        </Box>
      </StyledPaginationBox>
    </Layout>
  )
})

export default Post
