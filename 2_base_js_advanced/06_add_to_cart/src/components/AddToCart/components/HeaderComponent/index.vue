<template>
    <div>
        <ul v-if="items[0]">
            <li v-for="(item) in items" :key="item.id">
                {{item.id}} {{item.name}} {{item.surname}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        props: {
            items: {
                type: Array,
                default: ()=>[]
            },
        },

        computed: {
            name() {
                return this.data 
            }
        },
    }
</script>

<style scoped>
    ul {
        border: 1px solid #000;
    }
</style>