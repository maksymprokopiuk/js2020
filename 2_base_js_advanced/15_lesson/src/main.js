import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import firebase from "firebase"; //<------

//імпортуємо налаштування firebase
import "./firebase-config"; //<------
/* Підключаємо firebase до екземпляра Vue */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
