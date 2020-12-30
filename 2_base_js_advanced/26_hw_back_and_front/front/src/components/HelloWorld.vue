<template>
  <div class="books-container">
    <div v-for="book in booksList" :key="book.id" class="book-block">
      <div class="book-picture"><img :src="book.picture" :alt="title"></div>
      <div class="book-title"><span>{{ book.title }}</span></div>
      <div class="book-price"><span>{{ book.price }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      booksList: [
        {
          id: '1',
          title: 'Book 1',
          price: 1100,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        },
        {
          id: '2',
          title: 'Book 2',
          price: 1200,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        },
      ]
    }
  },
  
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
