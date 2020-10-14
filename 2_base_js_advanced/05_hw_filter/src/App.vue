<template>
  <div id="app">
    <todo-list
    :ttt="myList"/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
export default {
  name: 'App',
  components: {
    TodoList
  },

  data() {
    return {
      myList: [
        {
          id:1,
          task:"Milk",
          time:'18.10',
          status:"NEW"
        },
        {
          id:2,
          task:"Film",
          time:'19.10',
          status:"IN-PROGRES"
        },
        {
          id:3,
          task:"Slip",
          time:'19.50',
          status:"POSTPONED"
        },
        {
          id:4,
          task:"Milk2",
          time:'18.10',
          status:"NEW"
        },
        {
          id:5,
          task:"Aaaa",
          time:'18.10',
          status:"NEW"
        },
        {
          id:6,
          task:"Bbbb",
          time:'18.10',
          status:"NEW"
        },
      ]
    }
  },
}
</script>

<style>

</style>
