<template>
    <div>
        <h1>{{titleMenu1}}</h1>
        <ul>
            <span v-if="menuList1[0] === undefined">{{ listEmpty }}</span>
            <li v-for="(el, index) in menuList1" :key="index">{{ el }}
                <button @click="$emit('done', index)">Done</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu1',

        props: {
            titleMenu1: {
                type: String,
                default: 'Menu1'
            },
            listEmpty: {
                type: String,
                default: 'The list is empty'
            },
            menuList1: {
                type: Array,
                default: ()=> []
            },
        },
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
    ul {
        padding: 0;
    }
    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
</style>