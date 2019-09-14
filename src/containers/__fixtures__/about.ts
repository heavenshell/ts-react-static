import { lorem } from 'faker'

export const createAbout = () => ({
  title: lorem.words(),
  contents: lorem.paragraphs(),
  slug: 'about',
  date: '2019-07-15T00:00:00.000Z',
})
