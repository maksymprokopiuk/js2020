<template>
  <div id="app">
    <product-info
    title="Сир"
    :price="100"
    :tax="5"
    
    />
    <hr>
    <predictioner
    :items-list="wishes"
    />
    <hr>
    <summator
    
    />
  </div>

</template>

<script>
import ProductInfo from "./components/ProductInfo";
import Predictioner from "./components/Predictioner";
import Summator from "./components/Summator";

export default {
  name: 'App',
  components: {
    ProductInfo, //реєструємо 
    Predictioner,
    Summator
  },
  data() {
    return {
      wishes: ['money', 'love', '$$$', '222', '3333', '4444']
    }
  }
}
</script>

<style>

</style>