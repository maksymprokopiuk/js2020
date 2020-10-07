<template>
    <div>
        <div>{{title}}</div>
        <div>
            <todo-item v-for="taskItem in tasksList" :key="taskItem.id"
                :task="taskItem.task"
                :time="taskItem.time"
                :status='taskItem.status'
                @postponed="onPostponed(taskItem.id)"
             />
        </div>
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
            tasksList: {
                type: Array,
                default: ()=>[]
            },
            title:{
                type:String,
                default:'no title'
            }
        },

        methods: {
            onPostponed(id) {
                const task=this.tasksList.find(item=>item.id===id)
                task.status='POSTPONED'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>