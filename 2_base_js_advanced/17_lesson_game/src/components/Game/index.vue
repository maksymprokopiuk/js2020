<template>
    <div class="game-container">
        <card v-for="(item,index) in cardListImages" :key="index"
            :ref="item.id+index"
            :id="item.id"
            :image-src="item.imageSrc"
            @open="onCardOpen($event,item.id+index)"
        />
    </div>
</template>

<script>
import Card from "./Card";
    export default {
        name:"Game",
        components: {
            Card,
        },
        props: {
            imageList: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                card1: null,
                card2:null
            }
        },

        computed: {
            cardListImages() {
                const arr=[
                    ...this.imageList,
                    ...this.imageList
                ]
                const arrInd=arr.map((item,ind)=>ind)
                //  0,1,2,3,4,5,6,7,8
                // [0,1,2,4,5,6,8,9]
                const resArr=[]
                while (arrInd.length>0) {
                    const randInd= Math.floor(Math.random()*arrInd.length)
                    resArr.push(arr[ arrInd[randInd]  ])
                    arrInd.splice(randInd,1)
                }
                return resArr
            }
        },

        methods: {
            onCardOpen(id, compRef) {

                if(this.card1===null){
                    this.card1={
                        id, 
                        compRef
                    }
                } else{
                    this.card2={
                        id, 
                        compRef
                    }
                    if(this.card1.id!==this.card2.id){
                        setTimeout(()=>{
                            this.$refs[this.card1.compRef][0].close()
                            this.$refs[this.card2.compRef][0].close()
                            this.card1=null
                            this.card2=null
                        },1000)
                    } else{
                        this.card1=null
                        this.card2=null
                    }
                }
            }
        },
    }
</script>

<style lang="css" scoped>
.game-container{
    display: flex;
    flex-wrap: wrap;
    width: 640px;
    height: 300px;

}
</style>