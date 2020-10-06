<template>
  <div id="app">
    <login
    :logins-list="myUserList"
    />
  </div>
</template>

<script>
import Login from '@/components/Login'
import myUserList from "@/settings";

export default {
  name: 'App',
  components: {
    Login
  },
  
  // використовуємо Array
  data() {
    return {
      myUserList
    }
  },
}
</script>

<style>

</style>
