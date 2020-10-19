<template>
    <div>
        <product v-for="item in myProducts" :key="item.id"
            :id="item.id"
            :name="item.name"
            :surname="item.surname"
            :phone="item.phone"
            :email="item.email"
            :checked="item.checked"

            @change-checked="onChecked"
        />
    </div>
</template>

<script>
    import Product from "./Product";

    export default {
        name: 'ListComponent',

        components: {
            Product,
        },

        props: {
            myProducts: {
                type: Array,
                default: ()=>[]
            },
            
        },

        methods: {
            onChecked(val) {
                const x = this.myProducts[val-1]
                return (x.checked === true) ? x.checked = false : x.checked = true
            },
        },
    }
</script>

<style scoped>

</style>