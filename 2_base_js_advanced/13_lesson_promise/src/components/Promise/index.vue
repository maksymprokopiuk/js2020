<template>
  <div>
    <div class="section">
      <div class="card">
        <div class="card-content">
          <b-button @click="getNextDog" expanded>Get dog</b-button>
        </div>
        <div class="card-image">
          <img :src="getDogUrl" alt="dog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Promise",

  computed: {
    ...mapGetters(["getDogUrl"]),
  },

  methods: {
    ...mapActions(["getDogImage"]),

    getNextDog() {
      this.getDogImage();
    },
  },
};
</script>

<style scoped>
.card-image {
  text-align: center;
}
</style>