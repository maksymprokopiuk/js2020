import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import DoctorsPage from "@/pages/DoctorsPage";
import DoctorPage from "@/pages/DoctorPage";
import DoctorCreatePage from "@/pages/DoctorCreatePage";
import DoctorEditPage from "@/pages/DoctorEditPage";
import PatientsPage from "@/pages/PatientsPage";
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
        path: '/doctors/edit/:id',
        name: 'doctorEdit',
        component: DoctorEditPage
    },
    {
        path: '/doctors/:id',
        name: 'doctor',
        component: DoctorPage
    },
    {
        path: '/patients',
        name: 'patients',
        component: PatientsPage
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