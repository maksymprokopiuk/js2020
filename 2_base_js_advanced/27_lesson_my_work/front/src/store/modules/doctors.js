import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
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
    loadDataDoctors({ commit }) {
      axios
      .get(apiEndpoints.doctors.read)
      .then((res) => res.data)
      .then((resData) => {
          commit('setDoctorsListData', resData)
      })
    },
    addDoctor({ commit }, doctor) {
      axios
      .post(apiEndpoints.doctors.add, doctor)
      .then((res) => res.data)
      .then((resData) => {
          commit('addDoctorToList', resData.data)
      })
    },
    deleteDoctor({ dispatch }, doctorid) {
      // console.log(doctorid);
      axios
      .delete(apiEndpoints.doctors.delete, { data: {doctorid} })
      .then(res => {
          res.data
          dispatch ('loadDataDoctors')
      })
    },
    updateDoctor({ dispatch }, data) {
      // console.log(data);
      axios
      .put(apiEndpoints.doctors.upd, data)
      .then(res => {
          res.data
          dispatch ('loadDataDoctors')
      })
    },
  },
  getters: {
    getDoctorsList: (state) => {
      return state.doctorsList
    }
  },
};
