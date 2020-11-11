<template>
    <div class="cart">
        <label>
            <p>Cart</p>
            <input type="text" v-model="testNum">
        </label>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'Cart',

        computed: {
            ...mapGetters(['getTestNum']),
            testNum: {
                get: function() {
                    return this.getTestNum
                },
                set: function(val) {
                    return this.setTestNum(val)
                }
            }
        },

        methods: {
            ...mapActions(['setTestNum'])
        },
    }
</script>

<style scoped>
.cart {
    margin: 15px 0;
}
</style>