<template>
    <div>
        <div class="header-store">
            <label>
                <input type="text" v-model="searchText" placeholder="search">
            </label>

        </div>
        <!-- <products-list v-for="item in list" :key="item.id"
            :img="item.img"
            :title="item.name"
            :price="item.price"
        /> -->
        <products-list
            :productsList="list"
        />

    </div>
</template>

<script>
    import ProductsList from "@/components/Store/ProductsList/";

    export default {
        name: 'HeaderStore',

        components: {
            ProductsList,
        },

        props: {
            productsList: {
                type: Array,
                default: ()=>[]
            },
        },
        data() {
            return {
                searchText: null,
            }
        },
        computed: {
            list() {                
                if(!this.searchText) {
                    return this.productsList
                } else {
                    const text=this.searchText.toLowerCase()
                    return this.productsList.filter(item=>item.name.toLowerCase().includes(text))
                }
            },

        },
    }
</script>

<style scoped>
    .header-store {
        width: 100%;
        height: 70px;
        background: rgb(122, 101, 101);
        margin: 0 0 10px 0;
    }
</style>