<template>
    <div>
        <button @click="getNextDog">Get dog</button>
        <img :src="getDogUrl" alt="dog">
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'Promise',

        computed: {
            ...mapGetters(['getDogUrl']),
        },

        methods: {
            ...mapActions(['getDogImage']),
            
            getNextDog() {
                this.getDogImage()
            },
        },
    }
</script>

<style scoped>

</style>