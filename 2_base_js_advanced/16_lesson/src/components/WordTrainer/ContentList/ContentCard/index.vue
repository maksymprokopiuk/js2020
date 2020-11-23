<template>
  <div class="container">
    <div class="image-container">
      <img :src="imageSrc" alt="image" class="image" />
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    imageSrc: {
      type: String,
      default: require('@/assets/images/no-image.png'),
    },
    description: {
      type: String,
      default: 'no description',
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  width: 80px;
  height: 80px;
  border: 2px solid grey;
  border-radius: 8px;
  background-color: thistle;
  padding: 5px;
}
.image-container {
  text-align: center;
}
.image {
  height: 60px;
  max-width: 60px;
}
.description {
  text-align: center;
  height: 10px;
  font-size: 10px;
}
</style>
