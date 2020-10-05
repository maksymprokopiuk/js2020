<template>
  <div>
    <div v-for="(item, index) in items" :key="item.id">
      <span>{{ index + 1 }}) </span>
      <span>{{ item.name }} </span>
      <span>{{ item.salary }}</span>
    </div>
    <hr>

    <input type="text" v-model="inputName">
    <input type="text" v-model="inputPass">
    <button @click="getCred">ok</button>
    <span class="enter" v-if="this.checkUser = true">Success</span>
    <span class="enter" v-if="this.checkUser = false">Wrong</span>

  </div>
</template>
<script>
export default {
  
  name: "ObjList",
  
  data() {
    return {
      inputName: 'name',
      inputPass: 'pass',
      checkUser: false,
    }
  },
  
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    // getCred() {
    //     return checkUser
    // }
  }

};
</script>
<style lang="css" scoped>
  .enter {
    display: block;
  }
</style>