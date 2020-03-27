import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
       results: [],
       query: ''
    },
    actions: {
      getResult(query, {commit}) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=c9a79dde14786842e9de1b34cd607c36&query=' + query)
        .then(response => { this.results = response.data.results })
        console.log(query)
        .then(results => {
            commit('SET_RESULTS', results)
        })
      }
    },
    mutations: {
        SET_RESULTS (state, results) {
            state.results = results
      }
    }
});
