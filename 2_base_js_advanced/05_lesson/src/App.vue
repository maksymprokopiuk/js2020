<template>
  <div id="app">
    <product-list :products="myProducts"/>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import ProductList from "./components/ProductList";
export default {
  name: 'App',
  components: {
    TodoList,
    ProductList
  },

  data() {
    return {
      myProducts:[
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
      ],

      myList: [
        {
          id:1,
          task:"Milk",
          time:'18.10',
          status:"NEW"
        },
        {
          id:2,
          task:"Film",
          time:'19.10',
          status:"IN-PROGRES"
        },
        {
          id:3,
          task:"Slip",
          time:'19.50',
          status:"POSTPONED"
        },
        {
          id:4,
          task:"Milk2",
          time:'18.10',
          status:"NEW"
        },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
