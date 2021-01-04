import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";
// console.log(apiEndpoints.doctors.read);

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        doctorsList: [],
    },
    mutations: {
        setDoctorsListData(state, data) {
            state.doctorsList = [...data]
        },
        addDoctorToList(state, item) {
            state.doctorsList.push(item)
        }
    },
    actions: {
        loadData({ commit }) {
            axios
            .get(apiEndpoints.doctors.read)
            .then((res) => {
                res.data
                commit('setDoctorsListData', res.data)
            })
            // ! тут не зрозуміло чому втратилося значення?????????
            // ! 1 питання
            // .then((resData) => {
            //     console.log('resData------------------------------');
            //     console.log(resData);
                // commit('setDoctorsListData', resData)
            // })
        },
        addDoctor({ commit }, doctor) { //! doctor???
            axios
            .post(apiEndpoints.doctors.add, doctor)
            .then((res) => res.data)
            .then((resData) => {
                commit('addDoctorToList', resData.data)
            })
        },
        deleteDoctor({ dispatch }, doctorid) {
            axios
            .delete(apiEndpoints.doctors.delete, { data: {doctorid} })
            .then(res => {
                res.data
                // console.log('res.data');
                // console.log(res.data);
                dispatch ('loadData')
            })
        }
    },
    getters: {
        getDoctorsList: (state) => {
            return state.doctorsList
        }
    },
    modules: {}
})

export default store