import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')