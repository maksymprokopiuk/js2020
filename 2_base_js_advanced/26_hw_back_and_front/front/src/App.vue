<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  body {
    background-color: #1e1e1e;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #fff;
  }
</style>
