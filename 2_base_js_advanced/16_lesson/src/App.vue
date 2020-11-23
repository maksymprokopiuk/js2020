<template>
  <div id="app">
    <word-trainer :dataList="dataList" />
  </div>
</template>

<script>
import WordTrainer from './components/WordTrainer'

export default {
  name: 'App',
  components: {
    WordTrainer,
  },

  data() {
    return {
      dataList: [
        {
          id: '1',
          title: 'Hello1',
          contentDataList: [
            {
              id: '11',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '1111111',
            },
            {
              id: '22',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
            {
              id: '22',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
            {
              id: '11',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '1111111',
            },
            {
              id: '22',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
            {
              id: '33',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '33333',
            },
            {
              id: '44',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '44444',
            },
            {
              id: '55',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '55555555',
            },
            {
              id: '66',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
          ],
        },
        {
          id: '2',
          title: 'Hello2',
          contentDataList: [
            {
              id: 'aaaaa2222',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: 'aaaa2222',
            },
            {
              id: '22',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
            {
              id: '33',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '33333',
            },
            {
              id: '44',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '44444',
            },
            {
              id: '55',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '55555555',
            },
            {
              id: '66',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
          ],
        },
        {
          id: '3',
          title: 'Hello3',
          contentDataList: [
            {
              id: 'bb333',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: 'bb333',
            },
            {
              id: '22',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
            {
              id: '33',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '33333',
            },
            {
              id: '44',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '44444',
            },
            {
              id: '55',
              imageSrc:
                'https://papuas.ua/media/product/222/kartki-domana-frukti-na-ukr-732.jpg',
              description: '55555555',
            },
            {
              id: '66',
              imageSrc:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_WvnNoJnsgE3RGlfOaPVHGBcA1jRxjYGWA&usqp=CAU',
              description: '222222',
            },
          ],
        },
      ],
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
