<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <!-- <b-navbar-item href="/"><img :src=logo alt="Health Clinic Logo"/></b-navbar-item> -->
        <b-navbar-item @click="onHome"><img :src=logo alt="Health Clinic Logo"/></b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item @click="onDoctors"> Doctors </b-navbar-item>
        <b-navbar-item @click="onPatients"> Patients </b-navbar-item>
        <b-navbar-item @click="onSchedules"> Schedules </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary"><strong>Sign up</strong></a>
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",

  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },

  methods: {
    onHome() {
      this.$router.push({name:'home'})
    },
    onDoctors() {
      this.$router.push({name:'doctors'})
    },
    onPatients() {
      this.$router.push({name:'patients'})
    },
    onSchedules() {
      this.$router.push({name:'schedules'})
    },
  },
};
</script>

<style scoped>
</style>