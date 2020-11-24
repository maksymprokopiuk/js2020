<template>
    <div class="card-container"
    :style="{
            backgroundImage:`url(${isOpen?imageSrc:cardBackgroundImage})`,
            backgroundSize: 'cover'
        }"
    @click="open" >

    </div>
</template>

<script>
    export default {
        name:"Card",
        
        props: {
            id: {
                type: [String,Number],
                required:true
            },
            imageSrc:{
                type:String,
                default:require('@/assets/logo.png')                
            },
            cardBackgroundImage:{
                type:String,
                default:require('@/assets/logo.png')                
            },
            
        },

        data() {
            return {
                isOpen: false
            }
        },

        methods: {
            open() {
                if(!this.isOpen){
                this.isOpen=true;
                this.$emit('open',this.id)
                }
            },
            close(){
                this.isOpen=false
            }
        },
    }
</script>

<style lang="css" scoped>
.card-container{
    width: 200px;
    height: 100px;
    margin: 10px;
    border: 2px solid blue;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
}
</style>