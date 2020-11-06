import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// Імпортуємо екземпляр роутера
import router from "./router";

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router, // Підключаємо роутер
  render: h => h(App),
}).$mount('#app')
