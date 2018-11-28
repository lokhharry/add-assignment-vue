import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser: function (state, data) {
      state.user = data
    },
    logout: function (state, data) {
      state.user = null
    }
  },
  actions: {

  }
})
