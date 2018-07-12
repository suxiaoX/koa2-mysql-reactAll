import Loadable from 'react-loadable';
import Loading from '../view/Loading';

export default [
  {
    path: '/',
    component: Loadable({
      loader: () => import('../view/Home/index'),
      loading: Loading
    }),
    name: 'home'
  },

  {
    path: '/blog/user',
    component: Loadable({
      loader: () => import('../view/User'),
      loading: Loading
    }),
    name: 'userHome'
  },

  {
    path: '/login',
    component: Loadable({
      loader: () => import('../view/User/Login'),
      loading: Loading
    }),
    name: 'login'
  },

  {
    path: '/register',
    component: Loadable({
      loader: () => import('../view/User/Register'),
      loading: Loading
    }),
    name: 'register'
  },

  {
    path: '/blog/home',
    component: Loadable({
      loader: () => import('../view/Home/index'),
      loading: Loading
    }),
    name: 'blogHome'
  },

  {
    component: Loadable({
      loader: () => import('../view/NotFind'),
      loading: Loading
    }),
    name: 'notFind'
  }
]