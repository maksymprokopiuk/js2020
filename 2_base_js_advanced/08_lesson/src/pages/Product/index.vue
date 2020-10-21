<template>
  <div>
    <div>Product category: {{ productId }}</div>
    <div>Product id: {{ productId }}</div>
  </div>
</template>

<script>
export default {
  name: "Product",

  computed: {
    productId() {
      return this.$route.params.id;
    },
    c() {
      return this.$route.params.category;
    },
  },
};
</script>

<style scoped>
</style>