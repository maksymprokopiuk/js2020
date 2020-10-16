<template>
    <div class="product-card">
        <div class="image"
        v-bind:style="{ backgroundImage: 'url(' + img + ')' }"
        >
            <button>Add</button>
            <!-- <button @click="onCounterCart">Add</button> -->
        </div>
        <div class="text">{{title}}</div>
        <div class="text">{{price}}</div>
        <div class="text">{{priceDol}}</div>
        
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

        computed: {
            priceDol() {
                return ((this.price==='no price')? '' : (this.price/28).toFixed(2))
            }

        },
    }
</script>

<style scoped>
    .product-card {
        border-radius: 5px;
        width: 160px;
        height: 300px;
        text-align: center;
        margin: 5px;
    }
    .product-card:hover {
        border: 1px solid rgba(0, 255, 255, 0.801);
    }
    .product-card button {
        display: none;
    }
    .product-card:hover button {
        display: block;
    }
    .image > button {
        margin: 5px;
    }
    .text {
        margin: 5px;
        padding: 5px 0;
    }
    .image {
        width: 100%;
        height: 60%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    }
</style>