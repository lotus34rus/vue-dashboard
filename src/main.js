import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'materialize-css/dist/js/materialize.min.js'
import Vue2TouchEvents from 'vue2-touch-events'

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);
Vue.use(Vue2TouchEvents)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
