<template>
    <div class="card">
        <div class="image"
            v-bind:style="{ backgroundImage: 'url(' + img + ')' }"
        >
        </div>
        <div>{{title}}</div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            img: {
                type: String,
                default: require('@/assets/no_image.png')
            },
            title: {
                type: String,
                default: 'no title'
            },
        },
    }
</script>

<style scoped>
.card {
    width: 200px;
    height: 260px;
    text-align: center;
    
}
.image {
    width: 100%;
    height: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}
</style>