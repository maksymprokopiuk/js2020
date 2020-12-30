<template>
  <div class="books-container">
    <div v-for="book in getBooksList" :key="book._id" class="book-block">
      <div class="book-picture"><img :src="book.picture" :alt="book.title"></div>
      <div class="book-title"><span>{{ book.title }}</span></div>
      <div class="book-price"><span>{{ book.price }}</span></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'HelloWorld',
  
  props: {
    title: {
      type: String,
      default: 'No title'
    },
    picture: {
      type: String,
      default: require('@/assets/logo.png')
    },
    price: {
      type: [String, Number],
      default: 'No price'
    },
  },

  computed: {
    ...mapGetters(['getBooksList'])
  },

  methods: {
    ...mapActions(['loadData'])
  },

  created () {
    this.loadData();
  },
}
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;
}
.book-block {
  border: 1px solid yellowgreen;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  max-width: 300px;
  max-height: 340px;
}
.book-picture {
  text-align: center;
}
.book-picture img {
  max-width: 290px;
  max-height: 330px;
}
.book-title {
  text-align: center;
}
.book-price {
  text-align: center;
}
</style>
