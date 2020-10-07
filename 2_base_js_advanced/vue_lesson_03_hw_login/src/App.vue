<template>
  <div id="app">
    <login
    :usersCreds="userData"
    />
  </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      userData: [
      {
        log: "Іван",
        pass: "123",
      },
      {
        log: "Petja",
        pass: "2222",
      },
      {
        log: "Olga",
        pass: "1111",
      },
    ]
    }
  },
}
</script>

<style>
  body, ::placeholder {
    font-family: 'Roboto', sans-serif;
  }
</style>
