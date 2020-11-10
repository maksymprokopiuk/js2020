<template>
    <div class="home">
        <label>
            <p>Home</p>
            <input type="text" v-model="testNum">
        </label>
        <!-- <button>send</button> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'Home',

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
.home {
    margin: 15px 0;
}
</style>