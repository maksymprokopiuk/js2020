<template>
    <div id="container">
        <div>
            <span>Login: </span>
            <input type="text">
        </div>
        <div>
            <span>Password: </span>
            <input type="text">
        </div>
        <button @click="checkUser('input')">Go</button>
        <span>Result</span>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            checkUser(user) {
                return console.log(user);
            }
        }
    }
</script>

<style scoped>
    span {
        display: block;
    }
</style>