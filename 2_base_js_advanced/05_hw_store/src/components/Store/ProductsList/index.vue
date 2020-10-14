<template>
    <div>
        <div class="product-list">
            <product v-for="item in productsList" :key="item.id"
                :img="item.img"
                :title="item.name"
                :price="item.price"
            />
        </div>
    </div>
</template>

<script>
    import Product from "@/components/Store/ProductsList/Product";

    export default {
        name: 'ProductList',

        components: {
            Product,
        },

        props: {
            productsList: {
                type: Array,
                default: ()=>[]
            },
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
    .product-list {
        width: 100%;
        height: auto;
        background: rgb(141, 216, 200);
        display: flex;
        flex-wrap: wrap;
    }
</style>