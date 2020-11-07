<template>
    <div>
        <div class="section tomato">
            <div class="buttons">
                <router-link class="button" to="/">Home</router-link>
                <br>
                <router-link class="button" to="/products">Product</router-link>
                <br>
                <router-link class="button" to="/about">About</router-link>
            </div>
        </div>
        
        <router-view/>
        
        <div class="section burlywood">
            footer
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MasterPage',
    }
</script>

<style scoped>
.tomato {
    background-color: tomato;
}
.burlywood {
    background-color: burlywood;
}
</style>