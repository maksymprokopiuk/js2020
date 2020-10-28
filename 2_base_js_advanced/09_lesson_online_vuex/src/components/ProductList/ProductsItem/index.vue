<template>
    <div class="container">
        <img :src="image" :alt="title">
        <div>{{title}}</div>
        <div>{{price}}</div>
        <button @click="onAdd">Add</button>
    </div>
</template>

<script>
    export default {
        name: 'ProductsItem',

        props: {
            id: {
                type: [String, Number],
                require
            },
            image: {
                type: String,
                default: require('@/assets/no_image.png')
            },
            title: {
                type: String,
                default: 'no title'
            },
            price: {
                type: [String, Number],
                default: 'no price'
            }
        },

        methods: {
            onAdd() {
                
            }
        },
    }
</script>

<style scoped>
.container {
    width: 200px;
    height: 300px;
    border-radius: 5px;
}
</style>