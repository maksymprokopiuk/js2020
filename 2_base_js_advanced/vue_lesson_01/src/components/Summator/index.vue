<template>
    <div>
        <div>
            <label>
                First
                <input type="number" v-model="firstName">
            </label>
            <label>
                Second
                <input type="number" v-model="secondName">
            </label>
            <button @click="getSum">
                Get summ
            </button>
            <button @click="getRandNums()">
                Get n rand
            </button>
            <label>
                Result: <span>{{result}}</span>
            </label>
        </div>
        <div>
            Computed: {{summ}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Summator",
        // data тільки те що використ тут для локальних змінних (не реактивні)
        data() {
            return {
                firstName: '12',
                secondName: '32',
                result: null,
            }
        },
        // 
        computed: {
            summ() {
                return parseFloat(this.firstName)+parseFloat(this.secondName)
            }
        },
        
        // 
        methods: {
            getSum() {
                this.result = parseFloat(this.firstName)+parseFloat(this.secondName)
            },
            getRandNums() {
                this.firstName = Math.floor(Math.random()*100)
                this.secondName = Math.floor(Math.random()*100)
            }
        },
    }
</script>

<style scoped>

</style>