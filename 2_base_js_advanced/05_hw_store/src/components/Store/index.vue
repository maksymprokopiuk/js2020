<template>
    <div>
        <header-store :productsList="productsList"/>
        <div class="container">
            <!-- <filter-tab/> -->
            <products-list/>
        </div>
    </div>
</template>

<script>
    import productsList from "@/products";
    import HeaderStore from "./HeaderStore";
    // import FilterTab from "./FilterTab";
    import ProductsList from "@/components/Store/ProductsList";

    export default {
        name: 'Store',
        
        components: {
            HeaderStore,
            // FilterTab,
            ProductsList,
        },
        data() {
            return {
                productsList,
            }
        },
    }
</script>

<style scoped>
    .container {
        display: flex;
    }
</style>