<template>
  <div id="app">
    <header-section/>
    <router-view/>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection";

export default {
  name: 'App',
  
  components: {
    HeaderSection,
  }
}
</script>

<style>

</style>
