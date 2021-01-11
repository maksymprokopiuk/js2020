import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
  state: {
    schedulesList: [],
  },
  mutations: {
    setSchedulesListData(state, data) {
      state.schedulesList = [...data]
    },
    addScheduleToList(state, item) {
      state.schedulesList.push(item)
    }
  },
  actions: {
    loadDataSchedules({ commit }) {
      axios
      .get(apiEndpoints.schedules.read)
      .then((res) => res.data)
      .then((resData) => {
          commit('setSchedulesListData', resData)
      })
    },
    addSchedule({ commit }, schedule) {
      axios
      .post(apiEndpoints.schedules.add, schedule)
      .then((res) => res.data)
      .then((resData) => {
          commit('addScheduleToList', resData.data)
      })
    },
    deleteSchedule({ dispatch }, scheduleid) {
      // console.log(scheduleid);
      axios
      .delete(apiEndpoints.schedule.delete, { data: {scheduleid} })
      .then(res => {
        res.data
        dispatch ('loadDataSchedules')
      })
    },
    updateSchedule({ dispatch }, data) {
      // console.log(data);
      axios
      .put(apiEndpoints.schedules.upd, data)
      .then(res => {
          res.data
          dispatch ('loadDataSchedules')
      })
    },
  },
  getters: {
    getSchedulesList: (state) => {
      return state.schedulesList
    }
  },
};
