import { lazy } from 'react'

interface IRoutes {
  [key: string]: {
    path: string
    exact: boolean
    component: any
  }
}

const routes: IRoutes = {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  About: {
    path: '/about',
    exact: true,
    component: lazy(() => import('../pages/About'))
  },
  Contact: {
    path: '/contact',
    exact: true,
    component: lazy(() => import('../pages/Contact'))
  },
  Story: {
    path: '/story/:storyId',
    exact: true,
    component: lazy(() => import('../pages/Story'))
  }
}

export default routes
