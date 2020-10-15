<template>
  <div id="app">
    <store/>
  </div>
</template>

<script>
import Store from '@/components/Store'

export default {
  name: 'App',
  
  components: {
    Store
  },
}
</script>

<style>
  html {
    box-sizing: border-box;
  }
  *, *:after, *:before {
    box-sizing: inherit;
  }
  body, ::placeholder {
    font-family: 'Roboto', sans-serif;
  }
</style>
