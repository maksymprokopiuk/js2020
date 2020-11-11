<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="buttons">
          <b-button @click="goHome">Home</b-button>
          <b-button @click="goDog">Dog</b-button>
          <b-button @click="goElephant">Elephant</b-button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MasterPage",

  methods: {
            goHome() {
                return this.$router.push({name: 'home'})
            },
            goDog() {
                return this.$router.push({name: 'dog'})
            },
            goElephant() {
                return this.$router.push({name: 'elephant'})
            },
        },
};
</script>

<style scoped>
</style>