<template>
    <div class="header-component">
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
.header-component {
    background-color: antiquewhite;
    width: 100%;
    height: 100px;
}
    ul {
        /* border: 1px solid #000; */
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
</style>