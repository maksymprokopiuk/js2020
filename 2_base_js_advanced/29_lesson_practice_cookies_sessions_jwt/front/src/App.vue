<template>
  <div id="app">
    <div>
      <router-link to="/" class="btn btn-link">Home</router-link>
      <router-link to="/login" class="btn btn-link">Login</router-link>
      <router-link to="/signup" class="btn btn-link">Sign up</router-link>
      <router-link v-if="isAuthenticated()" to="/secret" class="btn btn-link">Secret page</router-link>
      <div v-if="isAuthenticated()" class="div-block" @click="onLogout"> Logout </div>
{{isAuthenticated()}}
      <div v-if="userNick" class="div-block">User: {{userNick}}</div>
    </div>
       <!-- Місце вставки сторінок -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'App',
computed: {
  ...mapGetters('auth',['userNick','isAuthenticated'])
},

  methods: {
    ...mapActions('auth',['logout']),
    onLogout() {
      this.logout()
      this.$router.push({path:'/login'})
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  margin-right: 20px;
}
.div-block{
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;

}
</style>
