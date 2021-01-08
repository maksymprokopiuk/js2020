<template>
  <div >
    <div v-if="isLoading">
      ...... loading  .....
    </div>
    <div v-else>
   <div v-for="product in getProductsListData" :key="product.__id">
     {{product.title}} - {{product.price}}
   </div>
   <div v-if="isError">
      .... ERRROR ----
   </div>
   </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from "vuex";
export default {
  name: 'Home',
  computed: {
    ...mapGetters('products',['getProductsListData',
    'isLoading', 'isError'])
  },

  methods: {
    ...mapActions('products',['loadData'])
  },

  async created () {
    try {
      await this.loadData()
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
