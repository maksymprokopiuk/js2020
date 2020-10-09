<template>
    <div>
        <ul>
            <li><a href="https://vuejs.org">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org">Forum</a></li>
            <li><a href="https://chat.vuejs.org">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs">Twitter</a></li>
            <li><a href="https://news.vuejs.org">News</a></li>
        </ul>
        <!-- вивод елементів динамічно -->
        <!-- :key - основний елемент для оновлення!!! -->
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
            <option v-for="el in myList" :key="el.name" >{{el.name}}</option>
            <!-- дописати про вибраний пункт по замовчуванні!!! -->
        </select>
        <div>{{ index }}</div>
        <hr>
        <ul>
            <!-- для об'єкта -->
            <!-- якщо треба вивести ЗНАЧЕННЯ -->
            <li v-for="value in myObject" :key="value">значення-{{value}}</li>
        </ul>
        <hr>
        <ul>
            <!-- якщо треба вивести ІМ'Я, то треба вказати другий елемент -->
            <li v-for="(value, name) in myObject" :key="name">ім'я-{{name}}</li>
        </ul>
        <ul>
            <!-- якщо треба вивести ІНДЕКС, то треба вказати третій елемент -->
            <li v-for="(value, name, index) in myObject" :key="index">індекс-{{index}} ім'я-{{name}} значення-{{value}}  </li>
        </ul>
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
            myObject: {
                type: Object,
                default: ()=>{}
            },
        },
        data() {
            return {
                selection: 3
            }
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
        font-size: 1.2rem;
    }
    .green {
        color: green;
    }
</style>