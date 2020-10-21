<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>My header</div>
    <div>
      <!-- перезагрузка сторінки!!!! -->
      <a href="http://localhost:8080/about">about</a>
      <!--  -->
      <hr>
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/about">About</router-link>
      <button @click="goHome">go home</button>
      <button @click="goProduct">go product</button>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },

  methods: {
    goHome() {
      this.$router.push({name: 'home'})
    },
    goProduct() {
      this.$router.push({name: 'home',
      
      })
    }
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
