<template>
    <div>
        <img :src="imgSrc" class="my-img">
        <div>
            {{`${title} - ${clicksNumber}`}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyBaner',

        props: {
            imgSrc: {
                type: String,
                default: 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-illustration-132483053.jpg'
            },
            title: {
                type: String,
                default: 'No title'
            },
            clicksNumber: {
                type: Number,
                default: 0
            }
        },
    }
</script>

<style lang="css" scoped>
    .my-img {
        width: 200px;
    }
</style>