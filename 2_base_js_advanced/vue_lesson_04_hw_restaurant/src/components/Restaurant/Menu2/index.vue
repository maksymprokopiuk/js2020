<template>
    <div>
        <h1>{{ titleMenu2 }}</h1>
        <ul>
            <span v-if="menuList2[0] === undefined">{{ listEmpty }}</span>
            <li v-for="(el, index) in menuList2" :key="index">{{ el }}
                <button @click="$emit('done2', index)">Done</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu2',

        props: {
            titleMenu2: {
                type: String,
                default: 'Menu2'
            },
            listEmpty: {
                type: String,
                default: 'The list is empty'
            },
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