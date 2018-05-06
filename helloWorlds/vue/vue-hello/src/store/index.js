import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      whatever: 1
    },
    mutations: {
      increment (state) {
        state.whatever++
      }
    }
  })
}
