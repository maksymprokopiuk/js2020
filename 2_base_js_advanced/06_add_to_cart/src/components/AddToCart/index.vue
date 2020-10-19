<template>
    <div>
        <header-component
            :items="productsArr"
        />
        <nav-component/>
        <list-component
            :myProducts="productsArr"
            
        />
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from "./components/HeaderComponent";
    import NavComponent from "./components/NavComponent";
    import ListComponent from "./components/ListComponent";
    import FooterComponent from "./components/FooterComponent";

    import ProductsList from "@/productsList.js";

    export default {
        name: 'AddToCart',

        components: {
            HeaderComponent,
            NavComponent,
            ListComponent,
            FooterComponent,
        },

        data() {
            return {
                productsArr: ProductsList,
            }
        },

        computed: {
            products() {
                return this.productsArr
            }
        },
    }
</script>

<style scoped>

</style>