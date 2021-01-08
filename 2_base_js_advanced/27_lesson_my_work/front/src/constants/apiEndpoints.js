export default {
    doctors: {
      read: `${process.env.VUE_APP_API_URL}/doctors`,
      add: `${process.env.VUE_APP_API_URL}/doctors`,
      delete: `${process.env.VUE_APP_API_URL}/doctors`,
      upd: `${process.env.VUE_APP_API_URL}/doctors`,
    },
    patients: {
      read: `${process.env.VUE_APP_API_URL}/patients`,
      add: `${process.env.VUE_APP_API_URL}/patients`,
      delete: `${process.env.VUE_APP_API_URL}/patients`,
      upd: `${process.env.VUE_APP_API_URL}/patients`,
    },
  };
  