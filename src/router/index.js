import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Recommended from '../views/Recommended.vue'
import Genres from '../views/Genres.vue'
import Authors from '../views/Authors.vue'
import ViewAuthor from '../views/ViewAuthor.vue'
import Publish from '../views/Publish.vue'
import Search from '../views/Search.vue'

import Series from '../views/Series.vue'
import ViewComic from '../views/ViewComic.vue'

import CreateAccount from '../views/CreateAccount.vue'
import Dashboard from '../views/Dashboard.vue'
import CreateSeries from '../views/CreateSeries.vue'
import CreateChapter from '../views/CreateChapter.vue'
import History from '../views/History.vue'
import Favorites from '../views/Favorites.vue'
import Account from '../views/Account.vue'

import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/genres/:genreId',
    name: 'viewGenre',
    component: Genres
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/authors/:authorId',
    name: 'viewAuthor',
    component: ViewAuthor
  },
  {
    path: '/search/:query',
    name: 'search',
    component: Search
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish
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
    path: '/series/:seriesId',
    name: 'series',
    component: Series
  },
  {
    path: '/series/:seriesId/:chapterId',
    name: 'viewComic',
    component: ViewComic
  },
  {
    path: '/create/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/create/series',
    name: 'createSeries',
    component: CreateSeries
  },
  {
    path: '/create/chapter',
    name: 'createChapter',
    component: CreateChapter
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
  {
    path: '/account/new',
    name: 'createAccount',
    component: CreateAccount
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => {
    window.scrollTo(0, 0);
  },
  routes
});

export default router
