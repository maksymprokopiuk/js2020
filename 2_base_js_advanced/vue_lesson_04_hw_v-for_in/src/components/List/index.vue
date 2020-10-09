<template>
    <div>
        <ul>
            <li><a href="https://vuejs.org">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org">Forum</a></li>
            <li><a href="https://chat.vuejs.org">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs">Twitter</a></li>
            <li><a href="https://news.vuejs.org">News</a></li>
        </ul>
        <ul>
            <li v-for="item in myList" :key="item.name"><a v-bind:href="item.link" class="green"> {{item.name}} </a></li>
        </ul>
        <hr>
        <select>
            <option>Core Docs</option>
            <option>Forum</option>
            <option>Community Chat</option>
            <option>Twitter</option>
            <option>News</option>
        </select>
        <select>
            <option v-for="el in myList" :key="el.name">{{el.name}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'List',

        props: {
            myList: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
        font-size: 1.5rem;
    }
    .green {
        color: green;
    }
</style>