export type NextProps = {
  title: string
  slug: string
}

export type PrevProps = {
  title: string
  slug: string
}

type FrontMatterProps = {
  title: string
  slug: string
  date: Date
}

export type PostProps = {
  contents: string
} & FrontMatterProps
