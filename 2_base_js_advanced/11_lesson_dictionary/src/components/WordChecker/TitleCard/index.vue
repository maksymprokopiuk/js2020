<template>
  <div class="title-card">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TitleCard',

  props: {
    title: {
      type: String,
      default: 'no title',
    },
  },
}
</script>

<style lang="css" scoped>
.title-card {
  width: 100px;
  border: 2px solid black;
  border-radius: 8px;
}
</style>
