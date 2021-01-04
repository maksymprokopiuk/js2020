<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item href="/"><img :src=logo alt="Health Clinic Logo"/></b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/doctors"> Doctors </b-navbar-item>
        <b-navbar-item href="/patients"> Patients </b-navbar-item>
        <b-navbar-item href="/schedules"> Schedules </b-navbar-item>
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
};
</script>

<style scoped>
</style>