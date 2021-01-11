import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
    namespaced: true,
    state: {
      patientsList: [],
    },
    mutations: {
      setPatientsListData(state, data) {
        state.patientsList = [...data]
      },
      addPatientToList(state, item) {
        state.patientsList.push(item)
      }
    },
    actions: {
      loadDataPatients({ commit }) {
        axios
        .get(apiEndpoints.patients.read)
        .then((res) => res.data)
        .then((resData) => {
            commit('setPatientsListData', resData)
        })
      },
      addPatient({ commit }, patient) {
        axios
        .post(apiEndpoints.patients.add, patient)
        .then((res) => res.data)
        .then((resData) => {
            commit('addPatientToList', resData.data)
        })
      },
      deletePatient({ dispatch }, patientid) {
        //   console.log(patientid);
        axios
        .delete(apiEndpoints.patients.delete, { data: {patientid} })
        .then(res => {
            res.data
            dispatch ('loadDataPatients')
        })
      },
      updatePatient({ dispatch }, data) {
        axios
        .put(apiEndpoints.patients.upd, data)
        .then(res => {
            res.data
            dispatch ('loadDataPatients')
        })
      },
    },
    getters: {
      getPatientsList: (state) => {
        return state.patientsList
      }
    },
  };
