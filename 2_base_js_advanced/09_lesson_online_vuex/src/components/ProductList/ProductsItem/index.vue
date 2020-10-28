<template>
  <div class="container">
    <img :src="image" alt="product" />
    <div>{{ title }}</div>
    <div>{{ price }}</div>
    <button @click="onAdd">Add</button>
  </div>
</template>

<script>
//Крок 3. Піключаємо mapActions
import { mapActions } from 'vuex'

export default {
  name: 'ProductTitle',

  props: {
    id: {
      type: [String, Number],
      require,
    },
    image: {
      type: String,
      default: require('@/assets/images/no-image.jpg'),
    },
    title: {
      type: String,
      default: 'no title',
    },
    price: {
      type: [Number, String],
      default: 0,
    },
  },

  methods: {
    //Крок 4. Підключаємо необхідну функцію-action
    ...mapActions(['addToCart']),

    onAdd() {
      //Крок 5. Використовуємо  функцію-action
      this.addToCart(this.id)
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  width: 120px;
  height: 200px;
  border-radius: 5px;
  border: 2px solid green;
  padding: 10px;
  text-align: center;
}
.container img {
  width: 100px;
  max-height: 85px;
  margin: auto;
}
</style>
