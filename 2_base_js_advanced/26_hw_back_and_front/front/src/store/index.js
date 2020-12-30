import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        booksList: []
    },
    mutations: {
        setBooksList(state, data){
            state.booksList = [...data]
        }
    },
    actions: {
        loadData({ commit }) {
            axios
            .get(apiEndpoints.books.read)
            .then((res)=>res.data)
            .then((resData)=>{
                commit('setBooksList', resData.books)
            })
        }
    },
    getters: {
        getBooksList: (state) => state.booksList
    },
    modules: {}
})

export default store