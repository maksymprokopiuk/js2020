<template>
  <div class="container section">
    <div class="card">
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(' + img + ')' }"
      ></div>
      <div>{{ title }}</div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullCard",

  props: {
    img: {
      type: String,
      default: require("@/assets/no_image.png"),
    },
    title: {
      type: String,
      default: "no title",
    },
    description: {
      type: String,
      default: "no description",
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 690px;
  text-align: center;
  font-size: 4rem;
}
.card p {
  font-size: 14px;
}
.image {
  width: 100%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>