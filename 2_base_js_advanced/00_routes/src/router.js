import Vue from "vue";
import VueRouter from "vue-router";
// Імпортуємо компоненти сторінки
import Home from "@/pages/Home";
import Product from "@/pages/Product";

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
        path: '/product',
        name: 'product',
        component: Product
    },
];

// Створюємо екземпляр роутера
const router = new VueRouter({
    mode: 'history',
    routes
});

// Експортуємо екземпляр роутера
export default router;