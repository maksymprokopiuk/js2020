<template>
    <div>
        <full-card
        :img="getProd.img"
        :title="getProd.title"
        :description="getProd.description"
        />
    </div>
</template>

<script>
    import FullCard from "@/components/FullCard";
    import productList from "@/productList";

    export default {
        name: 'Prod',

        components: {
            FullCard,
        },

        data() {
            return {
                productList: productList
            }
        },

        computed: {
            receivedProdId() {
                return this.$route.params.id
            },
            getProd() {
                return this.productList.find(item=>item.id===this.receivedProdId)
            }
        },
    }
</script>

<style scoped>

</style>