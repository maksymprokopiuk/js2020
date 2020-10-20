<template>
  <div>
<!--  -->

    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <!-- <b-navbar-dropdown label="Info"> -->
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            <!-- </b-navbar-dropdown> -->
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

<!--  -->
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