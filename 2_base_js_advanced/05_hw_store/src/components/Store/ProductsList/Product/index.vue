<template>
    <div>
        <div class="product">
            <img :src="img" alt="">
            <div>{{title}}</div>
            <div>{{price}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',

        props: {
            img: {
                type: String,
                default: require('@/assets/images/no_image.png')
            },
            title: {
                type: String,
                default: 'no title'
            },
            price: {
                type: [String, Number],
                default: 'no price'
            },
        },
    }
</script>

<style scoped>
    .product {
        width: 150px;
        height: 200px;
        border: 1px solid #000;
        margin: 5px;
        text-align: center;
    }
    .product img {
        max-width: 100px;
        max-height: 150px;
    }
</style>