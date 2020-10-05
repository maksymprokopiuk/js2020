<template>
    <div>
        <div>
        {{currentPrediction}}
        </div>
        <button @click="getPrediction">
            Зробити передбачення
        </button>
    </div>
</template>

<script>
    export default {
        name: "Predictioner",

        props: {
            itemsList: {
                type: Array,
                default: ()=>[]
            },
        },
        data() {
            return {
                currentPrediction: "Натисни на кнопку"
            }
        },
        methods: {
            getPrediction() {
                const randIndex = Math.floor(Math.random()*this.itemsList.length)
                this.currentPrediction = this.itemsList[randIndex]
            }
        },
    }
</script>

<style lang="css" scoped>

</style>