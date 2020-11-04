<template>
  <div id="app">
    <!-- <div class="section"> -->
      <nav-section
        :wordsList="list"
      />
      <cards-list-section class="column"
        :cardList="list[id].cardsDataList"
      />
    <!-- </div> -->
  </div>
</template>

<script>
import NavSection from "./components/NavSection";
import CardsListSection from "./components/CardsListSection";

export default {
  name: "App",
  components: {
    NavSection,
    CardsListSection
  },

  data() {
    return {
      list: [
        {
          id: 1,
          word: "First",
          cardsDataList: [
            { src: require('@/assets/img/1.png'), title: "1.1" },
            { src: require('@/assets/img/2.png'), title: "1.2" },
            { src: require('@/assets/img/3.png'), title: "1.3" },
            { src: require('@/assets/img/4.png'), title: "1.4" },
            { src: require('@/assets/img/5.png'), title: "1.5" },
            { src: require('@/assets/img/6.png'), title: "1.6" },
          ],
        },
        {
          id: 2,
          word: "Second",
          cardsDataList: [
            { src: require('@/assets/img/1.png'), title: "2.1" },
            { src: require('@/assets/img/2.png'), title: "2.2" },
            { src: require('@/assets/img/3.png'), title: "2.3" },
            { src: require('@/assets/img/4.png'), title: "2.4" },
            { src: require('@/assets/img/5.png'), title: "2.5" },
            { src: require('@/assets/img/6.png'), title: "2.6" },
          ],
        },
        {
          id: 3,
          word: "Third",
          cardsDataList: [
            { src: require('@/assets/img/1.png'), title: "3.1" },
            { src: require('@/assets/img/2.png'), title: "3.2" },
            { src: require('@/assets/img/3.png'), title: "3.3" },
            { src: require('@/assets/img/4.png'), title: "3.4" },
            { src: require('@/assets/img/5.png'), title: "3.5" },
            { src: require('@/assets/img/6.png'), title: "3.6" },
          ],
        },
      ],
      id: 0,
    };
  },

  // methods: {
  //   onClick(id) {
  //     return id
  //   }
  // },
};
</script>

<style>
body, ::placeholder {
    font-family: 'Roboto', sans-serif;
  }
#app {
  display: flex;
  width: 500px;
}
</style>
