<template>
  <div>
    <add-product-form />

    <div class="header">
      <div>
        ProductList
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex' //Крок 3. Імпортуємо mapGetters

import ProductsItem from './ProductsItem'
import AddProductForm from './AddProductForm'
export default {
  name: 'ProductList',
  components: {
    ProductsItem,
    AddProductForm,
  },

  computed: {
    ...mapGetters(['getProductsListData', 'getCartLength']), //Крок 4. Підключаємо потрібний геттер
  },
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
