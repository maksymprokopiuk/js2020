<template>
    <div>
        <h1>{{ titleMenu3 }}</h1>
        <ul>
            <span v-if="menuList3[0] === undefined">{{ listEmpty }}</span>
            <li v-for="(el, index) in menuList3" :key="index">{{ el }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu3',

        props: {
            titleMenu3: {
                type: String,
                default: 'Menu3'
            },
            listEmpty: {
                type: String,
                default: 'The list is empty'
            },
            menuList3: {
                type: Array,
                default: ()=> []
            },
        },
    }
</script>

<style scoped>
    div {
        border: 1px solid blueviolet;
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