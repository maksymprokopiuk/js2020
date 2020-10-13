<template>
    <div class="products-list">
            <div class="product" v-for="item in productsList" :key="item.id">
                <img v-bind:src="item.img" v-bind:alt="item.name">
                <div>{{ item.name }}</div>
                <div>{{ item.price }} ₴</div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductsList',

        props: {
            productsList: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style scoped>
    .products-list {
        width: 70%;
        height: 100%;
        background: #D7B9B9;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .product {
        list-style: none;
        border: 1px solid #000;
        width: 200px;
        height: 250px;
        text-align: center;
        background: #fff;
    }
    .product img {
        max-width: 150px;
        max-height: 150px;
    }
</style>