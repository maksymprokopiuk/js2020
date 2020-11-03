<template>
    <div class="nav-section">
        <nav-element v-for="word in wordsList"
            :key="word.id"
            :title="word.word"
        />
    </div>
</template>

<script>
    import NavElement from "./NavElement";
    export default {
        name: 'NavSection',

        components: {
            NavElement,
        },

        props: {
            wordsList: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style scoped>
.nav-section {
    background-color: rgb(82, 197, 243);
    /* width: 180px; */
    padding: 0 12px;
}
.white {
    background-color: #fff;
}
</style>