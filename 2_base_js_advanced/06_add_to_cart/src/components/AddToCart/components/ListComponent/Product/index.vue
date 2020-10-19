<template>
    <div class="product"
        :class="{'red-color': checked}"
        @click="$emit('change-checked', id)"
    >
        <div>{{id}}</div>
        <div>{{name}}</div>
        <div>{{surname}}</div>
        <div>{{phone}}</div>
        <div>{{email}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Product',

        props: {
            id: {
                type: Number,
                default: 0
            },
            name: {
                type: String,
                default: 'no name'
            },
            surname: {
                type: String,
                default: 'no surname'
            },
            phone: {
                type: [String, Number],
                default: 'no phone'
            },
            email: {
                type: String,
                default: 'no email'
            },
            checked: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style scoped>
    .product {
        border: 1px solid #000;
        width: 150px;
        margin: 5px;
    }
    .red-color {
        background: tomato;
    }
</style>