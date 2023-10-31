import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0, // State met teller
    user: null, // Gebruikersinformatie
  },
  getters: {
    doubleCount: (state) => state.count * 2, // Getter voor dubbele tellerwaarde
  },
  mutations: {
    increment(state) {
      state.count++ // Mutatie om de teller te verhogen
    },
    setUser(state, user) {
      state.user = user // Mutatie om gebruikersgegevens in te stellen
    },
  },
  actions: {
    fetchUser({ commit }) {
      setTimeout(() => {
        const user = { id: 1, name: 'John Doe' } // Gebruikersgegevens ophalen (simulatie)
        commit('setUser', user) // Mutatie aanroepen om gebruikersgegevens in te stellen
      }, 1000) // Simuleert een vertraagde API-oproep
    },
  },
  modules: {
  }
})
