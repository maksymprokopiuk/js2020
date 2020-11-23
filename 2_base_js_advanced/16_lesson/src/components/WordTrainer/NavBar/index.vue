<template>
  <div>
    <nav-card
      v-for="card in wordsList"
      :key="card.id"
      :id="card.id"
      :title="card.title"
      :active="activeCardId === card.id"
      class="nav-card"
      @selected="onSelect"
    />
  </div>
</template>

<script>
import NavCard from './NavCard'
export default {
  name: 'NavBar',
  components: {
    NavCard,
  },

  props: {
    wordsList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      activeCardId: null,
    }
  },

  methods: {
    onSelect(id) {
      this.activeCardId = id
      this.$emit('selected', id)
    },
  },
}
</script>

<style lang="css" scoped>
.nav-card {
  margin: 20px;
}
</style>
