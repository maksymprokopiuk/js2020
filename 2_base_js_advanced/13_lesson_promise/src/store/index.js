import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        url: null,
    },
    mutations: {
        setDogImage(state, url) {
            state.url = url;
        },
    },
    actions: {
        getDogImage({ commit }) {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.status !== 'success') throw new Error('Failed');
                return data.message;
            })
            .then((url) => {
                commit('setDogImage', url);
            })
            .catch((err) => console.log(err));
        },
    },
    getters: {
        getDogUrl: (state) => state.url,
    },
    modules: {},
});

export default store;