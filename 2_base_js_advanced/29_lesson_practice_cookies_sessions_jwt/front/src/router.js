import Vue from "vue";
import VueRouter from "vue-router";
//Імпортуємо компоненти-сторінки
import Home from "@/components/Home";
// import AddForm from "@/components/AddForm";
// import EditForm from "@/components/EditForm";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import SecretPage from "@/components/SecretPage";
import store from "./store";

//Підключаємо модуль до Vue
Vue.use(VueRouter);

//Встановлюємо відповідність між шляхами і компонентами-сторінками
const routes = [
  { path: "/", component: Home },
  // { path: "/create", component: AddForm },
  // { path: "/edit", component: EditForm },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/secret", component: SecretPage },
];

//Створюєм екземпляр роутера
const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let check =
    !store.getters["auth/isAuthenticated"]() &&
    !["/login", "/signup"].includes(to.path);

  if (check) {
    // Недопускаємо до захищених роутів, якщо немає токена

    next({ path: "/login" });
    return;
  } else {
    next();
  }
});

//Експортуємо екземпляр роутера
export default router;
