<template>
    <div class="product-list">
        <div v-if="!products">No items</div>
        <div v-if="products" class="products-list">
            <product v-for="item in products" :key="item.id"
                :img="item.img"
                :title="item.title"
                :price="item.price"
            />
        </div>
    </div>
</template>

<script>
    import Product from "./Product";

    export default {
        name: 'ProductList',

        components: {
            Product,
        },

        props: {
            products: {
                type: Array,
                default: null
            },
        },
    }
</script>

<style scoped>
    .product-list {
        flex: 1 1 auto;
    }
    .products-list {
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(218, 218, 218);
    }
</style>