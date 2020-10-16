<template>
    <div class="header-section">
        <div>
            <input type="text" v-model="searchText" placeholder="Product title">
        </div>
        <div v-if="productsInCart">
            Products in cart: {{ productsInCart }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderSection',

        props: {
            productsInCart: {
                type: Number,
                default: null
            },
        },

        data() {
            return {
                searchText: null,
            }
        },

        watch: {
            searchText(newValue) {
                this.$emit('title-filter', newValue)
            }
        },
    }
</script>

<style scoped>
    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: rgb(148, 118, 118);
        width: 100%;
        height: 50px;
    }
</style>