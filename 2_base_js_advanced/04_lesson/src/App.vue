<template>
  <div id="app">
    <todo-list  
    title="My list" 
    :tasksList="myList"/>
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
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
