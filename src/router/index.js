import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RecommendedView from '../views/RecommendedView.vue'
import GenresView from '../views/GenresView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import PublishView from '../views/PublishView.vue'
import SearchView from '../views/SearchView.vue'

import CreateView from '../views/CreateView.vue'
import DashboardView from '../views/DashboardView.vue'
import HistoryView from '../views/HistoryView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import AccountView from '../views/AccountView.vue'

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recommended',
    name: 'recommended',
    component: RecommendedView
  },
  {
    path: '/genres',
    name: 'genres',
    component: GenresView
  },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorsView
  },
  {
    path: '/publish',
    name: 'publish',
    component: PublishView
  },
  {
    path: '/create/:id',
    children: [
      {
        path: '',
        name: 'create',
        component: CreateView
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesView
      },
      {
        path: '/history',
        name: 'history',
        component: HistoryView
      },
      {
        path: '/account',
        name: 'account',
        component: AccountView
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/search/:query',
    name: 'search',
    component: SearchView
  },
]

const router = new VueRouter({
  routes
})

export default router
