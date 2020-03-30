import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { actions, mutations } from '../store'

describe('actions', () => {
    let store
    let setDataMock

    beforeEach(() => {
        setDataMock = jest.fn()

        store = new Vuex.Store({
            state: { movies: {}},
            mutations, 
            actions,/*: {
                getResult: actions.getResult
            }*/
        })
    })

    it('tests with mock commit', () => {
        let count = 0
        let movies

        let mockCommit = (state, payload) => {
            movies = payload
            count +=1
        }

        /*actions.getResult({ commit: mockCommit }).then(() => {
          expect(count).toBe(1)
          expect(movies).toEqual({ title: 'Mock with Jest' })
      })*/
    })

    it('test using a mock mutation but with a real store', () =>{
        store.hotUpdate({
            mutations: { SET_RESULT: setDataMock }
        })

        /*return store.dispatch('getResult').then((res) => {
            expect(setDataMock.mock.calls[0][1]).toEqual({title: 'Mock with Jest'})
            expect(setDataMock.mock.calls.toHaveLength(1))
        })*/
    })

    it('mocks an ajax calling axios with full store', () => {
        return store.dispatch('getResult')
            .then(() => expect(store.state.movies)
                .toEqual({})
            )
    })
})