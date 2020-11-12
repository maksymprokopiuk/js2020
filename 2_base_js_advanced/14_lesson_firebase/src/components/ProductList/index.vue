<template>
  <div>
    <div class="header">
      <div>
        ProductList
        <input type="text" v-model="testNum"/>
      </div>
      <div>Корзина : {{ getCartLength }}</div>
    </div>

    <div class="container1">
      <!-- Крок 5 Використовуємо дані з геттера -->
      <products-item
        v-for="product in getProductsListData"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.image"
        class="item"
      />
    </div>
    <div>
        <button @click="getNextDog">Get dog</button>
        <div>
        <img :src="getDogUrl" alt="dog"/> 
        </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' //Крок 3. Імпортуємо mapGetters

import ProductsItem from './ProductsItem'

export default {
  name: 'ProductList',
  components: {
    ProductsItem,
  },

   data() {
    return {
     
    }
  },

  computed: {
    ...mapGetters(['getProductsListData', 'getCartLength','getTestNum','getDogUrl']), //Крок 4. Підключаємо потрібний геттер
     testNum:{
       get:function(){
         return this.getTestNum
       },
       set:function(val){
         this.setTestNum(val)
       }
     }
  
  },
  // watch:{
  //     testNum(newVal){
  //       this.setTestNum(newVal)
  //   }
  // },

  methods:{
    ...mapActions(['setTestNum','getDogImage']),

    getNextDog(){
      this.getDogImage()
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.container1 {
  display: flex;
}
.item {
  margin-right: 16px;
}
</style>
