<template>
    <div class="cart">
        <label>
            <p>Cart</p>
            <input type="text" disabled :value="getTestNum">
        </label>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'Cart',

        computed: {
            ...mapGetters(['getTestNum']),
        },
    }
</script>

<style scoped>
.cart {
    margin: 15px 0;
}
</style>