<template>
    <div>
        <header-section
            :products-in-cart="productsInCart"
            @title-filter="setTextFilterData"
        />
        <div class="container">
            <filter-section
                :years-list="yearsList"
                :categories-list="categoriesList"
                @filter-changed="setFilter"
            />
            <product-list
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
                categoriesList: [
                    {
                        id:'',
                        title:'Усі категорії'
                    },
                    {
                        id:'phone',
                        title:'Телефон'
                    },
                    {
                        id:'laptop',
                        title:'Ноутбук'
                    },
                    {
                        id:'portable-gadjet',
                        title:'Гаджет'
                    },
                ],
                filter: {
                    textFilter: null,
                    minPrice: null,
                    maxPrice: null,
                    prodYear: null,
                    category: null,
                },
                productsInCart: 0,
            }
        },

        computed: {
            yearsList() {
                const arr = []
                this.filteredProducts.forEach(element => {
                    if (!arr.includes(element.year))
                        arr.push(element.year)
                })
                arr.sort()
                return arr
            },
            filteredProducts() {
                if (this.isFilterEmpty) return this.products

                return this.products.filter(item=>
                    (!this.filter.textFilter||item.title.toLowerCase().includes(this.filter.textFilter)) &&
                    (this.filter.minPrice===null||item.price>=this.filter.minPrice) &&
                    (this.filter.maxPrice===null||item.price<=this.filter.maxPrice) &&
                    (this.filter.prodYear===null||item.year==this.filter.prodYear) &&
                    (this.filter.category===null||item.category===this.filter.category)
                ) 
            },
            isFilterEmpty() {
                return !this.filter.textFilter &&
                this.filter.minPrice===null &&
                this.filter.maxPrice===null &&
                this.filter.prodYear===null &&
                this.filter.category===null
            }
        },

        methods: {
            setTextFilterData(searchText) {
                this.filter={
                    ...this.filter,
                    textFilter: searchText.toLowerCase()
                }
            },
            setFilter(newFilter) {
                this.filter={
                    ...this.filter,
                    ...newFilter
                }
            }
        },
    }
</script>

<style scoped>
    .container {
        display: flex;
        height: 100%;
    }
    
</style>