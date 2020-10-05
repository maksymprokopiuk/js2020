<template>
  <div id="app">
    <login/>
    <!-- <array :items="logins"/> -->
    <!-- <hr> -->
    <!-- <bank/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/Login"
// import Array from "./components/Array"
// import Bank from "./components/Bank"

export default {
  name: "App",
  components: {
    Login,
    // Array,
    // Bank
  },
  // data() {
    // return {
      // userLogins: [
      //   { id: '01', login: "user1", pass: "123456" },
      //   { id: '02', login: "user2", pass: "234567" },
      //   { id: '03', login: "user3", pass: "345678" },
      //   { id: '04', login: "user4", pass: "456789" },
      //   { id: '05', login: "user5", pass: "567890" },
      // ],
      // userLogins2: ['money', 'love', '$$$', '222', '3333', '4444']
    // }
  // },
  data() {
    return {
      logins: [
        {
          id: 1,
          name: 'Іванов',
          pass: '12121212',
        },
        {
          id: 2,
          name: 'Петров',
          pass: '23232323',
        },
        {
          id: 3,
          name: 'Сидоров',
          pass: '34343434',
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
