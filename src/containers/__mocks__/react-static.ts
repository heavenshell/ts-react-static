import { createAbout } from '../__fixtures__/about'
import { createPosts } from '../__fixtures__/posts'
import { createPost, createNext, createPrev } from '../__fixtures__/post'

const reactStatic = jest.requireActual('react-static')

const mockRouteData = {
  about: { ...createAbout() },
  posts: createPosts(),
  post: createPost(),
  next: createNext(),
  prev: createPrev(),
}

module.exports = {
  ...reactStatic,
  useRouteData: jest.fn().mockImplementation(() => mockRouteData),
}
