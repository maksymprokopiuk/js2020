import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
// import apiEndpoints from "@/constants/apiEndpoints";
import patients from "./modules/patients";
import doctors from "./modules/doctors";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        doctors,
        patients
    }
})

export default store