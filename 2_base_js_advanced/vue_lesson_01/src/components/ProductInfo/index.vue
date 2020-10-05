<template>
    <table>
        <tr>
            <td>Назва</td>
            <td>{{title}}</td>
        </tr>
        <tr>
            <td>Ціна</td>
            <td>{{price}}</td>
        </tr>
        <tr>
            <td>ПДВ</td>
            <td>{{tax}}</td>
        </tr>
        <tr>
            <td>Загалом</td>
            <td>{{total}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'ProductInfo',
        // вхідні дані 
        props: {
            title: {
                type: String,
                require: true
            },
            price: {
                type: Number,
                default: 0
            },
            tax: {
                type: Number,
                default: 0
            },
            // total: {
            //     type: Number,
            //     default: 0
            // }
        },
        // велечини які обчислюються на основі даних отриманих
        computed: {
            total() {
                return this.price+this.price*this.tax/100
            },
            // інші дані data
        },
        // усі функції що використовуються у компоненті
        methods: {
            getTotal() {
                return this.price+this.price*this.tax/100
            }
        },
        // total() викликається так і не кешується і можна передати пареметри
    }
</script>

<style scoped>
    table {
        border: 1px solid black;
    }
</style>