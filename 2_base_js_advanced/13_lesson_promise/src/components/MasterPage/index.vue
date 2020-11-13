<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="buttons">
          <b-button v-for="link in routes" :key="link.name"
            @click="goLink(link)"
          >{{ link.name }}</b-button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "MasterPage",

  data() {
    return {
      routes,
    }
  },

  methods: {
    goLink(link) {
      return this.$router.push({name: link.name})
    },
  },
};
</script>

<style scoped>
</style>