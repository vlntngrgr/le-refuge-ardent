import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'

import router from './router'
import store from './store'

import { Debounce } from  './plugins'
import { ClickOutside } from  './plugins'

import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(Debounce);
Vue.use(ClickOutside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
