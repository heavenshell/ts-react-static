import { lorem } from 'faker'

export const createPosts = () =>
  Array.from(new Array(5), () => ({
    title: lorem.text(),
    slug: lorem.slug(),
    date: new Date(),
    contents: lorem.sentences(),
  }))
