import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        testNum: 0,
    },
    mutations: {
        setTestNum(state, data) {
            state.testNum = data;
        },
    },
    actions: {
        setTestNum({commit}, data) {
            commit('setTestNum', data);
        },
    },
    getters: {
        getTestNum: (state) => state.testNum,
    },
    modules: {},
});

export default store;