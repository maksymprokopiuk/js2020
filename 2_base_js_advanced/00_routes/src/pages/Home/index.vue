<template>
  <section class="section">
    <div class="columns is-centered is-multiline is-mobile">
        <card v-for="product in productList"
            :key="product.id"
            :img="product.img"
            :id="product.id"
            :title="product.title"
        />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";
import productList from "@/productList";

export default {
  name: "Home",

  components: {
    Card,
  },

  data() {
    return {
      productList,
    };
  },
};
</script>

<style scoped>
.card {
    margin: 5px;
}
</style>