<template>
    <div>
        <h1>History</h1>
        <ul>
            <li v-for="(el, index) in menuList3" :key="index">{{ el }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu3',

        props: {
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