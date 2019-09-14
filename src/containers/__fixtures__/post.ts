import { lorem } from 'faker'

export const createPost = () => ({
  title: lorem.words(),
  contents: lorem.paragraphs(),
  slug: `/${lorem.slug}`,
  date: '2019-07-15T00:00:00.000Z',
})

export const createNext = () => ({
  title: lorem.words(),
  slug: `/${lorem.slug()}`,
})

export const createPrev = () => ({
  title: lorem.words(),
  slug: `/${lorem.slug()}`,
})
