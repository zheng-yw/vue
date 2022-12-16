import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      message: 'Hello!'
    },
    getters: {
        getMessage (state) {
            return state.message
        }
    },
    mutations: {
        setMessage(state, data) {
            state.message = data
        }
    }
})

export default store
