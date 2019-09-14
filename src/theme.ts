import { createMuiTheme } from '@material-ui/core'

export const getTheme = (isDarkTheme: boolean) =>
  createMuiTheme({
    palette: {
      type: isDarkTheme ? 'dark' : 'light',
    },
  })
