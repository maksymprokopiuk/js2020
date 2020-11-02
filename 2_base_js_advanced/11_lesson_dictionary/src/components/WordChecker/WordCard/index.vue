<template>
  <div class="word-card" :class="getClass" @click="activate">
    <div>{{ word }}</div>
    <div>{{ trascription }}</div>
  </div>
</template>

<script>
export default {
  name: 'WordCard',
  props: {
    word: {
      type: String,
      required: true,
    },
    trascription: {
      type: String,
      required: true,
    },
    isCorrectWord: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActivated: false,
    }
  },

  computed: {
    getClass() {
      if (this.isActivated) {
        return this.isCorrectWord ? 'is-correct' : 'is-wrong'
      }
      return ''
    },
  },

  methods: {
    activate() {
      this.isActivated = !this.isActivated
    },
  },
}
</script>

<style lang="css" scoped>
.word-card {
  width: 150px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid blue;
  cursor: pointer;
}

.is-correct {
  background-color: greenyellow;
}
.is-wrong {
  background-color: red;
}
</style>
