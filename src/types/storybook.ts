export type StoryProps = {
  (): JSX.Element
  story: {
    name?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters?: Record<string, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    decorators?: Array<any>
  }
}
