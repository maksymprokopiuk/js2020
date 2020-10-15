<template>
    <div :class="`container ${statusClass}`">
        <div class="title">
            <span>{{task}}</span>
            <span>{{time}}</span>
        </div>
        <div class="buttons">
            <button @click="$emit('done')">Виконати</button>
            <button @click="$emit('plan',id)">Запланувати</button>
            <button @click="$emit('my-postponed')">
                Відкласти
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"TodoItem",

        props: {
            id: {
                type: [String,Number],
                required:true,                 
            },
            task: {
                type: String,
                default:'',                 
            },
            time: {
                type: String,
                default:'',                 
            },
            status:{
                type: String,
                default:'',
            }
        },

        computed: {
            statusClass() {
                switch (this.status) {
                    case 'NEW': return 'new'                        
                      
                    case 'IN-PROGRES': return 'in-progres'                        
                      
                    case 'POSTPONED': return 'postponed'                        

                    case 'DONE': return 'done'                        
                               
                    default:
                        return 'new'   
                     
                }
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: flex;
    justify-content: space-between;
}
.new{
    background-color: green;
}
.in-progres{
    background-color: yellow;
}
.postponed{
    background-color: red;
}
.done{
    background-color: blue;
}

/* .title{
    float: left;
}
.buttons{
    float:right;
} */
</style>