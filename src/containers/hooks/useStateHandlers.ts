import * as React from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import { RouteComponentProps } from 'react-router-dom'

const LOCAL_STORAGE_KEY = 'isDarkTheme'

const useDarkThemeStates = () => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
    LOCAL_STORAGE_KEY,
    false
  )

  return { isDarkTheme, setDarkTheme }
}

type UseDarkThemeHandlers = {
  setDarkTheme: ReturnType<typeof useDarkThemeStates>['setDarkTheme']
  history: RouteComponentProps['history']
}

const useDarkThemeHandlers = ({
  setDarkTheme,
  history,
}: UseDarkThemeHandlers) => {
  const onThemeChange = React.useCallback(
    (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setDarkTheme(!!checked)
    },
    [history]
  )

  return { onThemeChange }
}

export const useStateHandlers = ({
  history,
}: Pick<RouteComponentProps, 'history'>) => {
  const { isDarkTheme, setDarkTheme } = useDarkThemeStates()
  const { onThemeChange } = useDarkThemeHandlers({
    setDarkTheme,
    history,
  })

  return { isDarkTheme, onThemeChange }
}
