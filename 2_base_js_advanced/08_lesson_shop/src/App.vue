<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>My header</div>
    <div>
      <router-link to="/"> Home </router-link>
      <router-link to="/cart"> Cart </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/product"> Product </router-link>
      <button @click="goHome">Go home</button>
      <button @click="goProduct">Go product</button>

      <span>Cart:  {{getProductsNumberInCart}}</span>
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

computed: {
  getProductsNumberInCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]').length
  }
},

  methods: {
    goHome() {
      // this.$router.push({ path: '/home' })
      this.$router.push({ name: 'home' })
    },
    goProduct(){
      this.$router.push({ 
       name: 'product',
       params: { category: 'video',
       id:77777 } })
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
