<template>
    <div class="nav-element">
        <strong>{{title}}</strong>
    </div>
</template>

<script>
    export default {
        name: 'NavElement',

        props: {
            title: {
                type: String,
                default: 'no title'
            },
        },
    }
</script>

<style scoped>
.nav-element {
    border: 1px solid #000;
    border-radius: 4px;
    margin: 12px 0;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    padding: 40px 0;
    font-size: 1.5rem;
}
</style>