<template>
    <div>
        <div v-for="(item, index) in items" :key="item.id">
        <!-- <span>{{ index + 1 }}) {{ item.name }} {{ item.pass }}</span> -->
        <span>{{ item.id + '+' +index}}</span>
    </div>
    </div>
</template>

<script>
    export default {
  name: 'ObjList',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
    div {
        /* border: 1px solid #000; */
        /* width: 400px; */
        /* height: 200px; */
        margin: 10px;
    }
</style>