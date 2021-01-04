import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import DoctorsPage from "@/pages/DoctorsPage";
import DoctorPage from "@/pages/DoctorPage";
import DoctorCreatePage from "@/pages/DoctorCreatePage";
import Patients from "@/pages/Patients";
import Schedules from "@/pages/Schedules";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: DoctorsPage
    },
    {
        path: '/doctors/add',
        name: 'doctoradd',
        component: DoctorCreatePage
    },
    {
        path: '/doctors/:id',
        name: 'doctorsid',
        component: DoctorPage
    },
    {
        path: '/patients',
        name: 'patients',
        component: Patients
    },
    {
        path: '/schedules',
        name: 'schedules',
        component: Schedules
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router