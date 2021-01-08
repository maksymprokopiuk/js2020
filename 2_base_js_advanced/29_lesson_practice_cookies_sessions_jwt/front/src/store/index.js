import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
// import apiEndpoints from "@/constants/apiEndpoints";
// import { uuid } from "uuidv4";
import products from "./modules/products";
import auth from "./modules/auth";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    products,
    auth,
  },
});

export default store;
