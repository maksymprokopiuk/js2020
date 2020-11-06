<template>
    <div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/product">Product</router-link>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'MasterPage',
    }
</script>

<style scoped>

</style>