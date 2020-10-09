<template>
    <div>
        <h1>Menu2</h1>
        <ul>
            <li v-for="(el, index) in menuList2" :key="index">{{ el }}
                <button @click="$emit('postponed2', index)">Done</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu2',

        props: {
            menuList2: {
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