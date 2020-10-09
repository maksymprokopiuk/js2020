<template>
  <div id="app">
    <list
    :myList="myList"
    />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
      myList: [
        {
          name: 'Core Docs 2',
          link: 'https://vuejs.org'
        },
        {
          name: 'Forum 2',
          link: 'https://forum.vuejs.org'
        },
        {
          name: 'Community Chat 2',
          link: 'https://chat.vuejs.org'
        },
        {
          name: 'Twitter 2',
          link: 'https://twitter.com/vuejs'
        },
        {
          name: 'News 2',
          link: 'https://news.vuejs.org'
        },
      ]
    }
  },
}
</script>

<style>

</style>
