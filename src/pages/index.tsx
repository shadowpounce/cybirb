import { Article } from './Article/Article'
import { Blog } from './Blog/Blog'
import { BugBounty } from './BugBounty/BugBounty'
import { CybGuard } from './CybGuard/CybGuard'
import { Cybnest } from './Cybnest/Cybnest'
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
  {
    title: 'Cybnest',
    path: '/cybnest',
    element: <Cybnest />,
    withPreloader: false,
  },
  {
    title: 'Bug Bounty',
    path: '/bug-bounty',
    element: <BugBounty />,
    withPreloader: false,
  },
  {
    title: 'CybGuard',
    path: '/cybguard',
    element: <CybGuard />,
    withPreloader: false,
  },
]
