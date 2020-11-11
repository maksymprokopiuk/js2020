<template>
  <div>
    <div class="container">
      <div class="section">
        <div class="box" @click="getNextDog">
          <img :src="getDogUrl" alt="dog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dog",

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
.box {
  text-align: center;
  cursor: pointer;
}
</style>