import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";

import DoctorsPage from "@/pages/DoctorsPage";
import DoctorPage from "@/pages/DoctorPage";
import DoctorCreatePage from "@/pages/DoctorCreatePage";
import DoctorEditPage from "@/pages/DoctorEditPage";

import PatientsPage from "@/pages/PatientsPage";
import PatientCreatePage from "@/pages/PatientCreatePage";
import PatientEditPage from "@/pages/PatientEditPage";
import PatientPage from "@/pages/PatientPage";

import Schedules from "@/pages/Schedules";

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    
    { path: '/doctors', name: 'doctors', component: DoctorsPage },
    { path: '/doctors/add', name: 'doctoradd', component: DoctorCreatePage },
    { path: '/doctors/edit/:id', name: 'doctorEdit', component: DoctorEditPage },
    { path: '/doctors/:id', name: 'doctor', component: DoctorPage },
    
    { path: '/patients', name: 'patients', component: PatientsPage },
    { path: '/patients/add', name: 'patientadd', component: PatientCreatePage },
    { path: '/patients/edit/:id', name: 'patientEdit', component: PatientEditPage },
    { path: '/patients/:id', name: 'patient', component: PatientPage },
    
    { path: '/schedules', name: 'schedules', component: Schedules },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router