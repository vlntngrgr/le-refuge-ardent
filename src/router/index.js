import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from './views'

import Musiques from './views/musiques'
import MusiquesChill from './views/musiques/chill'
import MusiquesTroll from './views/musiques/troll'

import Rire from './views/rire'
import RireMemesGeek from './views/rire/memes/geek'
import RireMemesTroll from './views/rire/memes/troll'
import RireChroniques from './views/rire/chroniques'
import RireChroniquesArticle from './views/rire/chroniques/articles'

import EvasionFantasy from './views/evasion/fantasy'
import EvasionFantasy2100 from './views/evasion/fantasy/2100'

import Meditation from './views/consciente/meditation'

import MentionsLegales from './views/legal/mentions'

import Page404 from './views/errors/404'

Vue.use(VueRouter)

const routes = [
  {
    name: 'accueil',
    path: '/',
    component: Accueil
  },
  
  {
    name: 'musiques',
    path: '/musiques',
    component: Musiques
  },
  {
    name: 'musiques-chill',
    path: '/musiques/chill',
    component: MusiquesChill
  },
  {
    name: 'musiques-troll',
    path: '/musiques/troll',
    component: MusiquesTroll
  },

  {
    name: 'rire',
    path: '/rire',
    component: Rire
  },
  {
    name: 'rire-chroniques',
    path: '/rire/chroniques',
    component: RireChroniques
  },
  {
    name: 'rire-chronique',
    path: '/rire/chroniques/:id',
    component: RireChroniquesArticle
  },
  {
    name: 'rire-memes-geek',
    path: '/rire/memes/geek',
    component: RireMemesGeek
  },
  {
    name: 'rire-memes-troll',
    path: '/rire/memes/troll',
    component: RireMemesTroll
  },

  {
    name: 'evasion-fantasy',
    path: '/evasion/fantasy',
    component: EvasionFantasy
  },
  {
    name: 'evasion-fantasy-2100',
    path: '/evasion/fantasy/2100',
    component: EvasionFantasy2100
  },

  {
    name: 'meditation',
    path: '/meditation',
    component: Meditation
  },

  {
    name: 'mentions-legales',
    path: '/legal/mentions',
    component: MentionsLegales
  },

  {
    name: '404',
    path: '/*',
    component: Page404
  }
]


const router = new VueRouter({
  mode: 'history',  
  base: process.env.BASE_URL,
  routes
});

export default router
