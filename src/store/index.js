import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

  const state  = {
      movies: [], 
      query: ''
  }

  export const actions = {
    getResult({ commit }, query) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=c9a79dde14786842e9de1b34cd607c36&query=' + query)
        .then(r => r.data.results)
        .then(movies => {
        commit('SET_RESULT', movies)
        //commit('updateQuery', query)
        })
    }
  }
  
  export const mutations = {
    SET_RESULT (state, movies) {
      state.movies = movies
    },
    /*updateQuery (state, query) {
        state.query = query
    }*/
  }

  export default new Vuex.Store({
    state,
    mutations, 
    actions
  })




