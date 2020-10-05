<template>
  <div id="app">
    <login-form :logins-list="myUserList"/>
  </div>
</template>
<script>
import LoginForm from "./components/LoginForm";
import myUserList from "./settings";
// import { myMessage,  myMessage2} from "./settings";
export default {
  name: 'App',
  components: {
    LoginForm
  },
data() {
  return {
    myUserList
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
  color: #2C3E50;
  margin-top: 60px;
}
</style>