<template>
  <div
    class="card"
    :class="{
      'is-active': active,
    }"
    @click="onSelect"
  >
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'NavCard',

  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      default: 'no-title',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onSelect() {
      if (!this.active) this.$emit('selected', this.id)
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  width: 80px;
  height: 80px;
  border: 2px solid grey;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.is-active {
  background-color: hotpink;
  cursor: not-allowed;
}
</style>
