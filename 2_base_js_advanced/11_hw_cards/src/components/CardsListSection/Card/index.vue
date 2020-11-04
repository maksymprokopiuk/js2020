<template>
    <div class="card">
        <div class="image"
        v-bind:style="{ backgroundImage: 'url(' + img + ')' }"
        >
        </div>
        <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            img: {
                type: String,
                default: require('@/assets/img/no_image.png')
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
    border: 1px solid #000;
    margin: 10px 10px 10px 10px;
    text-align: center;
    width: 140px;
    height: 114px;
}
.image {
    width: 100%;
    height: 60%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
}
</style>