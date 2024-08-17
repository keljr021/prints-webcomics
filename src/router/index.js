import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RecommendedView from '../views/RecommendedView.vue'
import GenresView from '../views/GenresView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import PublishView from '../views/PublishView.vue'

import CreateView from '../views/CreateView.vue'

import AboutView from '../views/AboutView.vue'


Vue.use(VueRouter)

const routes = [
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
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
