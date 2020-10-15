<template>
    <div>
        <header-section
            @title-filter='setTextFilterData'
        />
        <div class="container">
            <filter-section class="filter-section"/>
            <product-list class="product-list"
                :products="filteredProducts"
            />
        </div>
    </div>
</template>

<script>
    import HeaderSection from "./components/HeaderSection";
    import FilterSection from "./components/FilterSection";
    import ProductList from "./components/ProductList";

    import Products from "@/products.js";
    
    export default {
        name: 'Store',

        components: {
            HeaderSection,
            FilterSection,
            ProductList,
        },

        data() {
            return {
                products: Products,
                filter: {
                    textrFilter: null,
                }
            }
        },

        computed: {
            filteredProducts() {
                if (this.isFilterEmpty) return this.products
                return this.products.filter(item=>
                    (!this.filter.textFilter||item.title.toLowerCase().includes(this.filter.textFilter))
                ) 
            },
            isFilterEmpty() {
                return !this.filter.textFilter
            }
        },

        methods: {
            setTextFilterData(searchText) {
                this.filter={
                    ...this.filter,
                    textrFilter: searchText.toLowerCase()
                }
            }
        },
    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-areas: 
        ".filter-section .product-list";
    }
</style>