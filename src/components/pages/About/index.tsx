import * as React from 'react'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import convert from 'htmr'

import Layout, { Props as LayoutProps } from '../../templates/Layout'
import { StyledMarkdown } from '../../atoms/StyledMarkdown'

type ViewProps = {
  title: string
  contents: string
}

export type Props = ViewProps & LayoutProps

const StyledH1 = styled.h1`
  margin-left: 8px;
  font-size: 1.5em;
`

const Body: React.FC<ViewProps> = React.memo(({ title, contents }) => (
  <React.Fragment>
    <StyledH1>{title}</StyledH1>
    <Divider />
    <StyledMarkdown>{convert(contents)}</StyledMarkdown>
  </React.Fragment>
))

const About: React.FC<Props> = React.memo(({ title, contents, ...props }) => {
  return (
    <Layout {...props}>
      <Body title={title} contents={contents} />
    </Layout>
  )
})

export default About
