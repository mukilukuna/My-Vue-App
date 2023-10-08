import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    user: null,
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    fetchUser({ commit }) {
      setTimeout(() => {
        const user = { id: 1, name: 'John Doe' }
        commit('setUser', user)
      }, 1000)
    },
  },
  modules: {
  }
})
