<template>
    <div  class="container">
        <div>
           <input type="text" v-model="searchText" placeholder="Product title">
        </div>
        <div v-if="productsInCart">
            Products in card: {{productsInCart}}
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderSection',

        props: {
            productsInCart: {
                type: Number,
                default: null
            },
        },

        data() {
            return {
                searchText: null
            }
        },

        watch: {
            searchText(newValue) {
                this.$emit('title-filter', newValue)
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: flex;
    justify-content: space-between;
}
</style>