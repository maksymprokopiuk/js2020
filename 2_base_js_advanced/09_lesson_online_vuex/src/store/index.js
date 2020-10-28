import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'uuidv4'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //Список продуктів   ( Читання: Крок 1 - описали дані
    productsListData: [
      {
        id: 1,
        image: 'https://inkluzia.com.ua/content/images/25/ovochiid-94952233231829_small11.jpg',
        title: 'Tomato',
        price: 37,
      },
      {
        id: 2,
        image: 'https://static9.depositphotos.com/1628352/1107/i/450/depositphotos_11071200-stock-photo-cabbage.jpg',
        title: 'Cabbage',
        price: 16,
      },
    ],
    //Корзина (список ід)
    cart: [],
  },
  mutations: {
    //Зміна Крок 2. Створюємо функцію-мутацію, яка має право змінювати дані у state
    addProductToCart(state, id) {
      state.cart.push(id)
    },

    addProductToList(state, data) {
      state.productsListData.push({
        id: uuid(),
        ...data,
      })
    },
  },
  actions: {
    //Зміна Крок 1. Створюємо функцію-action, яку будемо викликати у компоненті, де потрібно ініціювати зміну стора
    addToCart({ commit }, id) {
      commit('addProductToCart', id)
    },

    addProduct({ commit }, productData) {
      commit('addProductToList', productData)
    },
  },

  //Зчитуємо дані зі стора (state)
  getters: {
    // Читання Крок 2) Створюємо функцію, яка повертає потрібні дані
    getProductsListData: (state) => state.productsListData,

    getCartLength: (state) => state.cart.length,
  },
})

export default store
