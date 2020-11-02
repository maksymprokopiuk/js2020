<template>
  <div>
    <div class="test-header">
      <title-card :title="testWordTitle" />
    </div>
    <div class="content">
      <word-card
        v-for="word in wordsList"
        :key="word.id"
        :word="word.enTitle"
        :trascription="word.enTranscription"
        :isCorrectWord="testWordId === word.id"
        class="card"
      />
    </div>
  </div>
</template>

<script>
import TitleCard from './TitleCard'
import WordCard from './WordCard'

export default {
  name: 'WordChecker',
  components: {
    TitleCard,
    WordCard,
  },

  props: {
    wordsList: {
      type: Array,
      default: () => [],
    },
    testWordId: {
      type: String,
    },
  },

  computed: {
    testWordTitle() {
      return this.wordsList.find((item) => item.id === this.testWordId).uaTitle
    },
  },
}
</script>

<style lang="css" scoped>
.content {
  display: flex;
}
.card {
  margin: 10px;
}
</style>
