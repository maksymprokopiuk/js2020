<template>
  <div id="app">
    <obj-list :items="workersList2" />
  </div>
</template>
<script>
import ObjList from "./components/ObjList";

export default {
  name: "App",
  components: {
    ObjList,
  },
  data() {
    return {
      workersList2: [
        {id: '111', name: "Іванов", salary: 10000},
        {id: '112', name: "Петров", salary: 20000},
        {id: '113', name: "Сидоров", salary: 50000},
      ],
    };
  },
};
</script>
<style></style>