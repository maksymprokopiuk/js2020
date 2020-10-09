<template>
    <div>
        <h1>Menu1</h1>
        <ul>
            <li v-for="(el, index) in menuList1" :key="index">{{ el }}
                <button @click="$emit('postponed', index)">Done</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu1',

        props: {
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