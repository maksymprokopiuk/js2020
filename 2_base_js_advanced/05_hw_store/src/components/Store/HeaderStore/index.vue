<template>
    <div class="header-store">
        <div class="container">
            <div>
                <a v-bind:href="linkLogo">
                    <img v-bind:src="headerLogo" alt="Logo">
                </a>
            </div>
            <div>
                <input type="text" placeholder="Filter">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderStore',

        props: {
            linkLogo: {
                type: String,
                default: '#'
            },
            headerLogo: {
                type: String,
                default: require('@/assets/images/logo.png')
            },
        },
    }
</script>

<style scoped>
    .header-store {
        width: 100%;
        height: auto;
        background: #B3D9E1;
    }
    .container {
        display: flex;
        justify-content: space-between;
        /* flex-direction: row; */
        align-items:center;
    }
    .container img {
        width: 80px;
    }
</style>