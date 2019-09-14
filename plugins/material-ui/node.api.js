import React from 'react'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const config = () => ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()

    const sheet = meta.muiSheets.collect(
      <ThemeProvider theme={theme}>
        {App}
      </ThemeProvider>
    )
    return sheet
  },
  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
})

export default config
