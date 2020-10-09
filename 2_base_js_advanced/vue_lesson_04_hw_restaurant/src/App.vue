<template>
  <div id="app">
    <restaurant/>
  </div>
</template>

<script>
import Restaurant from '@/components/Restaurant'

export default {
  name: 'App',
  components: {
    Restaurant
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
