<template>
  <div>
    <router-link :to="'/doctors/' + id">
      <div class="doctor-element">
        <router-link to="/doctors">
          <div class="delete-doctor" @click="onDelete">X</div>
        </router-link>
        <div class="doctor-name">
          <span class="span-text">Name: </span>
          <span><strong>{{ name }}</strong></span>
        </div>
        <div class="doctor-specialisation">
          <span class="span-text">Specialisation: </span>
          <span><strong>{{ specialisation }}</strong></span>
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
    specialisation: {
      type: String,
      default: "No specialisation",
    },
  },

  methods: {
    ...mapActions(['deleteDoctor']),

    onDelete() {
      this.deleteDoctor({
        id: this.id
      })
    }
  },
};
</script>

<style scoped>
.doctor-element {
  border: 1px solid rgba(255, 0, 0, 0.1);
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
.delete-doctor {
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
.doctor-element:hover {
  border: 1px solid red;
}
.doctor-element:hover .delete-doctor {
  display: block;
}
</style>