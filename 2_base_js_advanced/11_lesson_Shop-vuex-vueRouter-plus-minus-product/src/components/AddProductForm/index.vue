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
    <button @click="onAdd">{{ buttonTitle }}</button>
  </div>
</template>

<script>
//Крок 3. Імпортуємо mapActions
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AddProductForm',

  data() {
    return {
      title: null,
      price: null,
      image: null,
    }
  },

  computed: {
    ...mapGetters(['getProductById']),

    productId() {
      if (this.$route.params.product_id === 'new') return null
      else return this.$route.params.product_id
    },
    buttonTitle() {
      if (this.productId) return 'Зберегти зміни'
      else return 'Додати новий товар у базу'
    },
  },

  methods: {
    //Крок 4. Підключаємо необхідну функцію-action
    ...mapActions(['addProduct', 'updateProduct']),

    onAdd() {
      const { title, price, image } = this
      //Крок 5. Використовуємо1 функцію-action
      if (!this.productId)
        this.addProduct({
          title,
          price,
          image,
        })
      else
        this.updateProduct({
          id: parseInt(this.productId),
          title,
          price,
          image,
        })
    },
  },
  mounted() {
    if (this.productId) {
      const product = this.getProductById(this.productId)
      this.title = product.title
      this.price = product.price
      this.image = product.image
    }
  },
}
</script>

<style lang="scss" scoped></style>
