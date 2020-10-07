<template>
    <div :class="statusClass">
        <span>{{task}}</span>
        <span>{{time}}</span>
        <button>Виконати</button>
        <button>Запланувати</button>
        <button @click="$emit('postponed')">
            Відкласти
        </button>
    </div>
</template>

<script>
    export default {
        name:"TodoItem",

        props: {
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
                               
                    default:
                        return 'new'   
                     
                }
            }
        },
    }
</script>

<style lang="css" scoped>
.new{
    background-color: green;
}
.in-progres{
    background-color: yellow;
}
.postponed{
    background-color: red;
}
</style>