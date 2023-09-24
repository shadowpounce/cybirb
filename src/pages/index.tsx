import { Article } from './Article/Article'
import { Blog } from './Blog/Blog'
import { Home } from './Home/Home'

export const pages = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
    withPreloader: true,
  },
  {
    title: 'Blog',
    path: '/blog',
    element: <Blog />,
    withPreloader: false,
  },
  {
    title: 'Blog',
    path: '/blog/:slug',
    element: <Article />,
    withPreloader: false,
  },
]
