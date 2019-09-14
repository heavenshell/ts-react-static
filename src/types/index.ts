export type Next = {
  title: string
  slug: string
}

export type Prev = {
  title: string
  slug: string
}

type FrontMatter = {
  title: string
  slug: string
  date: Date
}

export type Post = {
  contents: string
} & FrontMatter
