import Vue from "vue";
import VueRouter from "vue-router";
// Імпортуємо компоненти сторінки
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";

// Підключаємо модуль до Vue
Vue.use(VueRouter);

// Встановлюємо відповідність між шляхами і компонентами
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
];

// Створюємо екземпляр роутера
const router = new VueRouter({
    mode: 'history',
    routes
});

// Експортуємо екземпляр роутера
export default router;