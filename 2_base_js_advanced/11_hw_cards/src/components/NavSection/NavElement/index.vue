<template>
  <div class="nav-element" :class="getClass" @click="activate">
    <strong>{{ title }}</strong>
    {{this.isActivated}}
  </div>
</template>

<script>
export default {
  name: "NavElement",

  data() {
    return {
      isActivated: false,
    };
  },

  props: {
    title: {
      type: String,
      default: "no title",
    },
  },

  computed: {
    getClass() {
      if (this.isActivated) {
        return "white";
      }
      return "";
    },
  },

  methods: {
    activate() {
      this.isActivated = !this.isActivated;
    },
  },
};
</script>

<style scoped>
.nav-element {
  border: 1px solid #000;
  border-radius: 4px;
  margin: 12px 0;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  padding: 40px 0;
  font-size: 1.5rem;
}
.white {
  background-color: #fff;
}
</style>