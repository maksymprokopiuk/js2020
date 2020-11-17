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
     <div>
      <label>
        Category
        <select v-model="category">
          <option v-for="opt in getCategoriesList"
          :key="opt"
          :value="opt"> {{opt}}</option>
        </select>
       
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
      category:null
    }
  },

  computed: {
    ...mapGetters(['getProductById','getCategoriesList']),

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
      const { title, price, image,category } = this
      //Крок 5. Використовуємо1 функцію-action
      if (!this.productId)
        this.addProduct({
          self:this, 
          productData:{
                        title,
                        price,
                        image,
                        category
                      }
        })
      else
        this.updateProduct({
           self:this, 
          productData:{
              id: this.productId,
              title,
              price,
              image,
              category
          }
        })
    },
  },
  mounted() {
    if (this.productId) {
      const product = this.getProductById(this.productId)
      this.title = product.title
      this.price = product.price
      this.image = product.image
      this.category = product.category
    }
  },
}
</script>

<style lang="scss" scoped></style>
