<template>
  <div class="nav-element" :id="'element-' + id" :class="getClass" @click="activate">
    <strong>{{ title }}</strong>
    <br>{{isActivated}}
    <br>{{id}}
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
    id: {
      type: [String, Number],
      default: "no id",
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
  margin: 12px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  padding: 40px 20px;
  font-size: 1.5rem;
}
.white {
  background-color: #fff;
}
.black {
  background-color: #000;
}
</style>