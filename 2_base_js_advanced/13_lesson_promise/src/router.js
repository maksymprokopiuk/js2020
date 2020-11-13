import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home";
import Elephant from "./pages/Elephant";
import Dog from "./pages/Dog";

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dog',
        name: 'dog',
        component: Dog
    },
    {
        path: '/elephant',
        name: 'elephant',
        component: Elephant
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router