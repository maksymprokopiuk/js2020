<template>
  <div class="container1">
    <content-card
      v-for="card in contentDataList"
      :key="card.id"
      :image-src="card.imageSrc"
      :description="card.description"
      class="content-card"
    />
  </div>
</template>

<script>
import ContentCard from './ContentCard'
export default {
  name: 'ContentList',
  components: {
    ContentCard,
  },

  props: {
    contentDataList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.container1 {
  max-width: 350px;
}
.content-card {
  margin: 10px;
  display: inline-block;
}
</style>
