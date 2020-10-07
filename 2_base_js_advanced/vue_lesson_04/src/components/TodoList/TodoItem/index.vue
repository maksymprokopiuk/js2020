<template>
    <div :class="statusClass">
        <span>{{ task }}</span>
        <span>{{ time }}</span>
        <button>Виконати</button>
        <button>Запланувати</button>
        <button>Відкласти</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',

        props: {
            task: {
                type: String,
                default: ''
            },
            time: {
                type: String,
                default: ''
            },
            status: {
                type: String,
                default: 'Done'
            },
        },
        computed: {
            statusClass() {
                switch (this.status) {
                    case 'NEW': return 'new'
                        // break;
                    case 'IN-PROGRES': return 'in-progres'
                        // break;
                    case 'POSTPONED': return 'postponed'
                        // break;
                
                    default: return 'new'
                        // break;
                }
            },
        },
    }
</script>

<style scoped>
    .new {
        background: green;
    }
    .in-progres {
        background: yellowgreen;
    }
    .postponed {
        background: red;
    }
</style>