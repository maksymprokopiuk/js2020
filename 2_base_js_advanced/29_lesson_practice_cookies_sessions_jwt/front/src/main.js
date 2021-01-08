import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
Vue.config.productionTip = false;

axios.interceptors.request.use(function(config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();

  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      // Якщо сервер відповів «401»
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
