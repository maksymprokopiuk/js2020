<template>
    <div>
        <div class="title">
            <span>{{id}} </span>
            <span>{{task}} - </span>
            <span>{{time}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"TodoItem",

        props: {
            id: {
                type: [String,Number],
                required:true,                 
            },
            task: {
                type: String,
                default:'',                 
            },
            time: {
                type: String,
                default:'',                 
            },
            status:{
                type: String,
                default:'',
            }
        },
    }
</script>

<style lang="css" scoped>
/* .container{
    display: flex;
    justify-content: space-between;
} */
/* span {
    background-color: green;
} */
</style>