import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Vuemeta from 'vue-meta'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '../public/base.css'

axios.defaults.baseURL = 'http://localhost:8001'

Vue.config.productionTip = false

Vue.use(Vuemeta)
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
