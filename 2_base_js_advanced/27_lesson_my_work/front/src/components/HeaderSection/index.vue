<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item @click="onLink"><img :src=logo alt="Health Clinic Logo"/></b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item @click="onLink"> Doctors </b-navbar-item>
        <b-navbar-item @click="onLink"> Patients </b-navbar-item>
        <b-navbar-item @click="onLink"> Schedules </b-navbar-item>
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
    onLink() {
      let eventText = event.target.innerText;
      this.$route.name===eventText.toLowerCase() ? '' : this.$router.push( eventText==='' ? {name: 'home'} : {name: eventText.toLowerCase()} );
    },
  },
};
</script>

<style scoped>
</style>