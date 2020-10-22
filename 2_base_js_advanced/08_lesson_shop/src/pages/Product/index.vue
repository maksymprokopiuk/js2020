<template>
    <div>
       <div>Current product</div>
       <div>
           {{selectedProduct.title}} - {{selectedProduct.price}}
       </div>
    </div>
</template>

<script>
import { products } from "@/settings.js";

    export default {
        name:"Product",

        computed: {
            productId() {
                return this.$route.params.id
            },
            productCategory() {
                return this.$route.params.category
            },
            selectedProduct(){
                   return  products.find(product=>product.id==this.productId)||{}
            }
            
        },
    }
</script>

<style lang="scss" scoped>

</style>