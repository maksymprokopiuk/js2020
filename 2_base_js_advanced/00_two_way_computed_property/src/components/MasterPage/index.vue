<template>
    <div class="container">
        <button @click="goHome">Home</button>
        <button @click="goCart">Cart</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'MasterPage',

        methods: {
            goHome() {
                return this.$router.push({name: 'home'})
            },
            goCart() {
                return this.$router.push({name: 'cart'})
            },
        },
    }
</script>

<style scoped>
.container {
    margin: 15px;
}
</style>