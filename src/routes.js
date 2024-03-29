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
import Relaxation from './views/consciente/relaxation'
import AutoCompassion from './views/consciente/compassion'
import AutoCompassionArticle from './views/consciente/compassion/articles'

import MentionsLegales from './views/legal/mentions'

import Page404 from './views/errors/404'

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
    name: 'relaxation',
    path: '/relaxation',
    component: Relaxation
  },
  {
    name: 'compassion',
    path: '/compassion',
    component: AutoCompassion
  },
  {
    name: 'compassion-article',
    path: '/compassion/:id',
    component: AutoCompassionArticle
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

export default routes
