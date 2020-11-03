<template>
  <div>
    <div v-if="getProductsFromCart.length === 0">
      The cart is empty!
    </div>
    <table v-if="getProductsFromCart.length > 0">
      <tr>
        <th>Title</th>
        <th></th>
        <th>Price</th>
      </tr>
      <tr v-for="product in getProductsFromCart" :key="product.id">
        <td>{{ product.title }}</td>
        <td>
          <img :src="product.image" alt="product.title" class="cart-image" />
        </td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="removeProduct(product.id)">Remove from cart</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' //Крок 3. Імпортуємо mapGetters
export default {
  name: 'Cart',

  computed: {
    ...mapGetters(['getProductsFromCart']),
  },

  methods: {
    ...mapActions(['removeFromStore']),

    removeProduct(id) {
      this.removeFromStore(id)
    },
  },
}
</script>

<style lang="css" scoped>
.cart-image {
  height: 40px;
}
</style>
