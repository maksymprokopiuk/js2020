<template>
    <div>
        <div v-for="product in selectedProducts" :key="product.name">
            <router-link :to="`/product/${product.category}/${product.id}`"> 
                 {{product.title}}
            </router-link>
            
             - {{product.price}}
        </div>
    </div>
</template>

<script>
import { products } from "@/settings.js";
    export default {
        name:'Cart',

        computed: {
            selectedProducts() {
                const productsList=JSON.parse(localStorage.getItem('cart')||'[]' )
          
                const res= productsList.map(id=> products.find(el=>el.id===id) )

                // const res=products.filter(product =>  productsList.includes(product.id))
                return res 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>