// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store'
// import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Mint)

Vue.use(Vuex)

Vue.use(VueResource)
// Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
