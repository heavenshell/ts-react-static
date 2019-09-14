import * as React from 'react'
import styled from '@emotion/styled'

import Layout, { Props as LayoutProps } from '../../templates/Layout'

export type Props = LayoutProps

const StyledH1 = styled.h1`
  margin-left: 8px;
  font-size: 1.5em;
`

const NotFound: React.FC<Props> = React.memo(({ ...props }) => {
  return (
    <Layout {...props}>
      <StyledH1>404 Not found</StyledH1>
    </Layout>
  )
})

export default NotFound
