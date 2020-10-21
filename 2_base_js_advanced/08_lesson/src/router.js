import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/product/:category/:id',
        name: 'product',
        component: Product
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router