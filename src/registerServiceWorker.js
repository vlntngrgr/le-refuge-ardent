/* eslint-disable no-isDev && console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      isDev && console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      isDev && console.log('Service worker has been registered.')
    },
    cached () {
      isDev && console.log('Content has been cached for offline use.')
    },
    updatefound () {
      isDev && console.log('New content is downloading.')
    },
    updated () {
      isDev && console.log('New content is available; please refresh.')
    },
    offline () {
      isDev && console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      isDev && console.error('Error during service worker registration:', error)
    }
  })
}
