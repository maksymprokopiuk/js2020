<template>
  <div>
    <div>
      <label>
        Title
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Price
        <input type="text" v-model="price" />
      </label>
    </div>
    <div>
      <label>
        Image
        <input type="text" v-model="image" />
      </label>
    </div>
    <button @click="onAdd">Add to product list</button>
  </div>
</template>

<script>
//Крок 3. Імпортуємо mapActions
import { mapActions } from 'vuex'
export default {
  name: 'AddProductForm',

  data() {
    return {
      title: null,
      price: null,
      image: null,
    }
  },

  methods: {
    //Крок 4. Підключаємо необхідну функцію-action
    ...mapActions(['addProduct']),

    onAdd() {
      const { title, price, image } = this
      //Крок 5. Використовуємо1 функцію-action
      this.addProduct({
        title,
        price,
        image,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
