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
          <i
            @click="decreaseProducts(product.id)"
            class="fas fa-minus-circle"
          ></i>
          {{ product.count }}
          <i @click="addToCart(product.id)" class="fas fa-plus-circle"></i>
        </td>
        <td>
          <button @click="removeProduct(product.id)">Remove from cart</button>
        </td>
      </tr>
    </table>

    <div>Total: {{ getTotaPrice }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' //Крок 3. Імпортуємо mapGetters
export default {
  name: 'Cart',

  computed: {
    ...mapGetters(['getProductsFromCart', 'getTotaPrice']),
  },

  methods: {
    ...mapActions([
      'addToCart',
      'removeFromStore',
      'decreaseProductsCountInCart',
    ]),

    decreaseProducts(id) {
      this.decreaseProductsCountInCart(id)
    },
    onAdd(id) {
      //Крок 5. Використовуємо  функцію-action
      this.addToCart(id)
    },

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
