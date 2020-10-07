<template>
    <div>
        <div>{{title}}</div>
        <div>
            <todo-item v-for="taskItem in tasksList" :key="taskItem.id"
                :task="taskItem.task"
                :time="taskItem.time"
                :status="taskItem.status"
            />
        </div>
    </div>
</template>

<script>
import TodoList from "./TodoItem";
    export default {
        name: 'TodoList',

        components: {
            TodoItem,
        },

        props: {
            tasksList: {
                type: Array,
                default: ()=> []
            },
            title: {
                type: String,
                default: 'no title'
            },
        },
    }
</script>

<style scoped>

</style>