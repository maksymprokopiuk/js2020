<template>
    <div>
        <div class="header">
              <label>
                  Filter:
                  <input type="text" v-model="seachText">
              </label>
        </div>
        <todo-item v-for="taskItem in list" :key="taskItem.id"
            :id="taskItem.id"
            :task="taskItem.task"
            :time="taskItem.time"
            :status='taskItem.status'
        />
        <todo-item
            :id="1223"
        />
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name:"TodoList",

        components: {
            TodoItem,
        },

        props: {
            ttt: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                seachText:null,
            }
        },

        computed: {
            list() {
                if(!this.seachText) {
                    return this.ttt
                } else {
                    const text=this.seachText.toLowerCase()
                    return this.ttt.filter(item=>item.task.toLowerCase().includes(text))
                }
            },
        },
    }
</script>

<style lang="css" scoped>

</style>