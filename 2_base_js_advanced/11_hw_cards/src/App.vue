<template>
  <div id="app">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },

  data() {
    return {
      list: [
        {
          id: 1,
          word: 'First',
          cardsDataList: [
            {src: '@/assets/img/1.png', title: '1.1'},
            {src: '@/assets/img/2.png', title: '1.2'},
            {src: '@/assets/img/3.png', title: '1.3'},
            {src: '@/assets/img/4.png', title: '1.4'},
            {src: '@/assets/img/5.png', title: '1.5'},
            {src: '@/assets/img/6.png', title: '1.6'},
          ]
        },
        {
          id: 2,
          word: 'Second',
          cardsDataList: [
            {src: '@/assets/img/1.png', title: '2.1'},
            {src: '@/assets/img/2.png', title: '2.2'},
            {src: '@/assets/img/3.png', title: '2.3'},
            {src: '@/assets/img/4.png', title: '2.4'},
            {src: '@/assets/img/5.png', title: '2.5'},
            {src: '@/assets/img/6.png', title: '2.6'},
          ]
        },
        {
          id: 3,
          word: 'Third',
          cardsDataList: [
            {src: '@/assets/img/1.png', title: '3.1'},
            {src: '@/assets/img/2.png', title: '3.2'},
            {src: '@/assets/img/3.png', title: '3.3'},
            {src: '@/assets/img/4.png', title: '3.4'},
            {src: '@/assets/img/5.png', title: '3.5'},
            {src: '@/assets/img/6.png', title: '3.6'},
          ]
        },
      ]
    }
  },
}
</script>

<style>

</style>
