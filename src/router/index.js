import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Recommended from '../views/Recommended.vue'
import Genres from '../views/Genres.vue'
import Authors from '../views/Authors.vue'
import Publish from '../views/Publish.vue'
import Search from '../views/Search.vue'

import Create from '../views/Create.vue'
import Dashboard from '../views/Dashboard.vue'
import History from '../views/History.vue'
import Favorites from '../views/Favorites.vue'
import Account from '../views/Account.vue'

import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recommended',
    name: 'recommended',
    component: Recommended
  },
  {
    path: '/genres',
    name: 'genres',
    component: Genres
  },
  {
    path: '/authors',
    name: 'authors',
    component: Authors
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish
  },
  {
    path: '/create/:id',
    children: [
      {
        path: '',
        name: 'create',
        component: Create
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
      },
      {
        path: '/history',
        name: 'history',
        component: History
      },
      {
        path: '/account',
        name: 'account',
        component: Account
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/search/:query',
    name: 'search',
    component: Search
  },
]

const router = new VueRouter({
  routes
})

export default router
