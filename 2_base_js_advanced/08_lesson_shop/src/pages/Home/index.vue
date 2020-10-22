<template>
    <div>
        <table>
            <tr>
            <th>
                Num
            </th>
            <th>
                Title
            </th>
            <th>
                price
            </th>
            <th>
                Action
            </th>
            </tr>

            <tr v-for="(product, index) in products" :key="product.id">
                <td>{{index+1}}</td>
                <td>{{product.title}}</td>
                <td>{{product.price}}</td>
                <td>
                    <button @click="addToCart(product.id)">+</button>

                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { products } from "@/settings.js";
    export default {
        name: 'Home',

        data() {
            return {
                products
            }
        },

        methods: {
            addToCart(productId) {
                const cart=JSON.parse( localStorage.getItem('cart')||'[]' )
                cart.push(productId)
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        },
    }
</script>

<style scoped>

</style>