import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
// import './registerServiceWorker'

import routes from './routes'
import store from './store'

import { Debounce } from  './plugins'
import { ClickOutside } from  './plugins'

import './styles/index.scss'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',  
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueRouter)
Vue.use(Debounce);
Vue.use(ClickOutside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
