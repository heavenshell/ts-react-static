import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { addParameters } from '@storybook/react'
import { withScreenshot } from 'zisui'

import { Global, css } from '@emotion/core'
import { ThemeProvider as StyledThemeProvider } from 'emotion-theming'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'

import { getTheme } from '../src/theme'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /\.stories\.tsx?$/)
const theme = getTheme()

const globalStyle = css`
  * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue,
      Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif;
  }
`

addDecorator(withKnobs)
addDecorator(getStory => {
  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {getStory()}
      </MaterialThemeProvider>
    </StyledThemeProvider>
  )
})

addDecorator(
  withScreenshot({
    viewport: { width: 1280, height: 800 },
  })
)

addParameters({
  viewports: {
    responsive: {
      name: 'Responsive',
      styles: { width: '100%', height: '100%' },
    },
    xxl: {
      name: 'xxl',
      styles: { width: '1600px', height: '100%' },
    },
    xl: {
      name: 'xl',
      styles: { width: '1200px', height: '100%' },
    },
    lg: {
      name: 'lg',
      styles: { width: '992px', height: '100%' },
    },
    md: {
      name: 'md',
      styles: { width: '768px', height: '100%' },
    },
    sm: {
      name: 'sm',
      styles: { width: '576px', height: '100%' },
    },
    xs: {
      name: 'xs',
      styles: { width: '568px', height: '100%' },
    },
  },
})

configure(req, module)
