import * as hooks from '../hooks/useStateHandlers'

type Props = {
  isDarkTheme?: boolean
}

export const createMockStateHandlers = ({ isDarkTheme = false }: Props) => {
  const mockThemeChanage = jest.fn().mockName('onThemeChange')

  const spy = jest.spyOn(hooks, 'useStateHandlers')
  spy.mockImplementation(() => ({
    isDarkTheme,
    onThemeChange: mockThemeChanage,
  }))

  return {
    mockThemeChanage,
  }
}
