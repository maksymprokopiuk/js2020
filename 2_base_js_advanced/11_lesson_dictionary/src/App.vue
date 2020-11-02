<template>
  <div id="app">
    <word-checker :wordsList="dataList" testWordId="2" />
  </div>
</template>

<script>
import WordChecker from './components/WordChecker'

export default {
  name: 'App',
  components: {
    WordChecker,
  },

  data() {
    return {
      dataList: [
        {
          id: '1',
          enTitle: 'table',
          enTranscription: 'table-tr',
          uaTitle: 'стіл',
        },
        {
          id: '2',
          enTitle: 'tea',
          enTranscription: 'tea-tr',
          uaTitle: 'чай',
        },
        {
          id: '3',
          enTitle: 'map',
          enTranscription: 'map-tr',
          uaTitle: 'карта',
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
