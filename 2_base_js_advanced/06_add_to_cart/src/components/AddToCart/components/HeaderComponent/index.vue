<template>
    <div>
        <ul>
            <li v-for="(item) in items" :key="item.id">
                {{item.checked}}
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