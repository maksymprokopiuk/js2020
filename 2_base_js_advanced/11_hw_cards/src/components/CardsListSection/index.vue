<template>
    <div class="cards-list-section">
        <card v-for="card in cardList"
            :key="card.title"
            :img="card.src"
            :title="card.title"
        />
    </div>
</template>

<script>
    import Card from "./Card";
    export default {
        name: 'CardsListSection',

        components: {
            Card,
        },

        props: {
            cardList: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style scoped>
.cards-list-section {
    background-color: rgb(228, 240, 68);
    /* width: 160px; */
    /* padding: 0 12px; */
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}
</style>