<template>
  <div>
    <div class="hader">
      <div class="menu">
        <span v-for="route in meneRoutes" :key="route.name" class="menu-item">
          <router-link :to="getPath(route)">
            {{ route.linkTitle }}
          </router-link>
        </span>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'Shop',

  data() {
    return {
      routes,
    }
  },

  computed: {
    meneRoutes() {
      return routes.filter((item) => item.isVisible)
    },
  },

  methods: {
    getPath(route) {
      if (route.path === '/product-form/:product_id') {
        return '/product-form/new'
      } else return route.path
    },
  },
}
</script>

<style lang="css" scoped>
.hader {
  background-color: cornflowerblue;
  height: 80px;
  margin-bottom: 40px;
}
.menu-item {
  margin: 20px;
}
</style>
