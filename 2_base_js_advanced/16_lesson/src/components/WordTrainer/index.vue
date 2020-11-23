<template>
  <div>
    <nav-bar :wordsList="dataList" class="nav" @selected="onSelect" />
    <content-list :content-data-list="activeContentList" class="content" />
  </div>
</template>

<script>
import ContentList from './ContentList'
import NavBar from './NavBar'
export default {
  name: 'WordTrainer',
  components: {
    NavBar,
    ContentList,
  },

  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      activeId: null,
    }
  },

  computed: {
    activeContentList() {
      if (!this.activeId) return []
      const activeCardObj = this.dataList.find(
        (item) => item.id === this.activeId
      )
      if (activeCardObj) return activeCardObj.contentDataList
      else return []
    },
  },

  methods: {
    onSelect(id) {
      this.activeId = id
    },
  },
}
</script>

<style lang="css" scoped>
.nav {
  display: inline-block;
  height: 350px;
}
.content {
  display: inline-block;
  height: 350px;
}
</style>
