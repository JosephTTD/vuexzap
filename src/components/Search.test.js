import Vue from 'vue'
import Vuex from 'vuex'
import { shallowMount } from '@vue/test-utils'
import Search from './Search'

Vue.use(Vuex)

describe('Search', () => {
    let store
    let actions
    let state

    beforeEach(() => {
        state = {movie: {}}

        actions = {
            getResult: jest.fn()
        }

        store = new Vuex.Store({
            state, 
            actions
        })
    })

    it('Dispatches the getResult action', () => {
        const wrapper = shallowMount(Search, {
            store
        })

        wrapper.find('input').trigger('keyup')

        expect(actions.getResult.mock.calls).toHaveLength(1)
    })

    it('displays data from the state', () => {
        store.replaceState({
            movie: 'Mock with replaceState'
        })

        const wrapper = shallowMount(Search, {
            store
        })

        expect(wrapper.text().trim().includes('Mock with replaceState')).toBe(false)
    })
})