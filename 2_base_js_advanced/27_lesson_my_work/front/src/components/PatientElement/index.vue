<template>
  <div>
    <router-link :to="'/patients/' + id">
      <div class="patient-element">
        <router-link to="/patients">
          <div class="delete-patient" @click="onDelete">X</div>
        </router-link>
        <div class="patient-name">
          <span class="span-text">Patient name: </span>
          <span><strong>{{ name }}</strong></span>
        </div>
        <div class="patient-disease">
          <span class="span-text">Disease: </span>
          <span><strong>{{ disease }}</strong></span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DoctorElement",

  props: {
    id: {
      type: String,
      default: "No id",
    },
    name: {
      type: String,
      default: "No name",
    },
    disease: {
      type: String,
      default: "No disease",
    },
  },

  methods: {
    ...mapActions('patients', ['deletePatient']),

    onDelete() {
      this.deletePatient({
        id: this.id
      })
    }
  },
};
</script>

<style scoped>
.patient-element {
  border: 1px solid rgba(0, 128, 0, 0.1);
  margin: 10px;
  padding: 10px;
  display: inline-block;
  width: 420px;
  position: relative;
}
.span-text {
    color: grey;
    display: inline-block;
    width: 110px;
    font-size: 12px;
}
.delete-patient {
  display: none;
  position: absolute;
  top: 5px;
  right: 5px;
  /* border: 1px solid #000; */
  background-color: red;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
}
.patient-element:hover {
  border: 1px solid green;
}
.patient-element:hover .delete-patient {
  display: block;
}
</style>