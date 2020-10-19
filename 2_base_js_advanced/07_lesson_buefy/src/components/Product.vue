<template>
  <div>
    <div>
      <b-tooltip label="Show click" position="is-bottom">
        <b-button class="btn" type="is-primary" @click.native="onClickShow">Show</b-button>
      </b-tooltip>
      <b-tooltip label="Hide click" position="is-bottom">
        <b-button class="btn" type="is-danger" @click.native="onClickHide">Hide</b-button>
      </b-tooltip>
      <span v-if="click">Click</span>
    </div>
    <div>
      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
            <div class="hero-body has-text-centered">
              <h1 class="title">{{ carousel.text }}</h1>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",

  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
      click: false,
    };
  },

  methods: {
    onClickShow() {
      this.click = true
    },
    onClickHide() {
      this.click = false
    },
    },
};
</script>

<style scoped>
  .btn {
    margin: 5px;
  }
</style>