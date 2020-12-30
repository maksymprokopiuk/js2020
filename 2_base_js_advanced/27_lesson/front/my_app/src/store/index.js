import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";
// import { uuid } from "uuidv4";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //Список продуктів   ( Читання: Крок 1 - описали дані
    productsListData: [],
    loading: false,
    error: null,
  },
  mutations: {
    setProductsListData(state, data) {
      state.productsListData = [...data];
    },
    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    loadData({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.products.read)
          .then((res) => res.data)
          .then((resData) => {
            // if (resData.success) {
            if (resData) {
              commit("setProductsListData", resData.products);
            }
            resolve(true);
          })
          .catch((err) => {
            console.log(err);
            commit("setError", err);
            reject(false);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      });
    },
  },

  //Зчитуємо дані зі стора (state)
  getters: {
    // Читання Крок 2) Створюємо функцію, яка повертає потрібні дані
    getProductsListData: (state) => {
      return state.productsListData;
    },
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
});

export default store;
