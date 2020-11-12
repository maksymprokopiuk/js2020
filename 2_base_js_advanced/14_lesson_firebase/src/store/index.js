import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "uuidv4";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    testNum: 0,
    //Список продуктів   ( Читання: Крок 1 - описали дані
    productsListData: [
      {
        id: 1,
        image:
          "https://inkluzia.com.ua/content/images/25/ovochiid-94952233231829_small11.jpg",
        title: "Tomato",
        price: 37,
      },
      {
        id: 2,
        image:
          "https://static9.depositphotos.com/1628352/1107/i/450/depositphotos_11071200-stock-photo-cabbage.jpg",
        title: "Cabbage",
        price: 16,
      },
    ],
    //Корзина (список ід)
    cart: [],
    url: null,
  },
  mutations: {
    setDogImage(state, url) {
      state.url = url;
    },

    setTestNum(state, data) {
      state.testNum = data;
    },
    //Зміна Крок 2. Створюємо функцію-мутацію, яка має право змінювати дані у state
    addProductToCart(state, id) {
      const product = state.cart.find((item) => item.id === id);
      if (product) product.count++;
      else
        state.cart.push({
          id,
          count: 1,
        });
    },

    addProductToList(state, data) {
      state.productsListData.push({
        id: uuid(),
        ...data,
      });
    },

    decreaseProductsCountInCart(state, id) {
      const product = state.cart.find((item) => item.id === id);
      product.count--;
      if (product.count === 0) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },

    removeFromStore(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    deleteProduct(state, id) {
      state.productsListData = state.productsListData.filter(
        (item) => item.id !== id
      );
    },

    updateProduct(state, productData) {
      const productIndex = state.productsListData.findIndex(
        (item) => item.id == productData.id
      );
      state.productsListData[productIndex] = productData;
    },
  },
  actions: {
    getDogImage({ commit }) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status !== "success") throw new Error("Failed");
          return data.message;
        })

        .then((url) => {
          commit("setDogImage", url);
        })

        .catch((er) => console.log(er));
    },

    setTestNum({ commit }, data) {
      commit("setTestNum", data);
    },
    //Зміна Крок 1. Створюємо функцію-action, яку будемо викликати у компоненті, де потрібно ініціювати зміну стора
    addToCart({ commit }, id) {
      commit("addProductToCart", id);
    },

    decreaseProductsCountInCart({ commit }, id) {
      commit("decreaseProductsCountInCart", id);
    },

    addProduct({ commit }, productData) {
      commit("addProductToList", productData);
    },

    removeFromStore({ commit }, productId) {
      commit("removeFromStore", productId);
    },

    deleteProduct({ commit }, id) {
      commit("deleteProduct", id);
      commit("removeFromStore", id);
    },

    updateProduct({ commit }, product) {
      commit("updateProduct", product);
    },
  },

  //Зчитуємо дані зі стора (state)
  getters: {
    getDogUrl: (state) => state.url,

    getTestNum: (state) => state.testNum,
    // Читання Крок 2) Створюємо функцію, яка повертає потрібні дані
    getProductsListData: (state) => state.productsListData,

    getCartLength: (state) =>
      state.cart.reduce((sum, item) => sum + item.count, 0),

    getProductsFromCart: (state) => {
      const arr = [];
      state.productsListData.forEach((product) => {
        const productObj = state.cart.find((item) => item.id == product.id);
        if (productObj) {
          arr.push({
            ...product,
            count: productObj.count,
          });
        }
      });
      return arr;
    },

    getTotaPrice: (state) => {
      return state.cart.reduce((sum, item) => {
        const product = state.productsListData.find(
          (elem) => elem.id === item.id
        );
        return sum + product.price * item.count;
      }, 0);
    },

    getProductById: (state) => (id) => {
      return state.productsListData.find((item) => item.id == id);
    },

    // getterName: (state)=> (вхідні_параметри)=>{
    //   return результати_пошуку
    // }
  },
});

export default store;
