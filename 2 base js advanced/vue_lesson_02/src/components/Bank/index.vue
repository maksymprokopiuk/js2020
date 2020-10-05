<template>
    <div>
        <span>Сума на рахунку: </span>
        <span class="green" v-if="moveMoney === true">{{(rakhunok).toFixed(2)}}</span>
        <span class="red" v-if="moveMoney === false">{{(rakhunok).toFixed(2)}}</span>
        <br>
        <span>Зарахувати на рахунок: </span>
        <input v-model="addMoney" @focus="getMoney=0">
        <button @click="addSum">Зарахувати</button>
        <br>
        <span>Зняти з рахунку: </span>
        <input v-model="getMoney" @focus="addMoney=0">
        <button @click="getSum">Зняти</button>
        <br>
        <span>Відсотки за обслуговування: {{(percent).toFixed(2)}}</span>
        <hr>
        <span>Сума в доларах: $</span>
        <span class="red" v-if="(currency(dollar)).toFixed(2) < 100">{{(currency(dollar)).toFixed(2)}}</span>
        <span class="green" v-if="(currency(dollar)).toFixed(2) > 100">{{(currency(dollar)).toFixed(2)}}</span>
        <br>
        <span>Сума в євро: €</span>
        <span class="red" v-if="(currency(euro)).toFixed(2) < 100">{{(currency(euro)).toFixed(2)}}</span>
        <span class="green" v-if="(currency(euro)).toFixed(2) > 100">{{(currency(euro)).toFixed(2)}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Bank',

        data() {
            return {
                rakhunok: 0,
                addMoney: 0,
                getMoney: 0,
                moveMoney: true,
            }
        },

        props: {
            tax: {
                type: Number,
                default: 3
            },
            dollar: {
                type: Number,
                default: 28.33
            },
            euro: {
                type: Number,
                default: 33.33
            }
        },
        computed: {
            percent() {
                if (parseFloat(this.addMoney) > 0 && parseFloat(this.getMoney) === 0) {
                    return parseFloat(this.addMoney) * this.tax / 100
                } else {
                    if (parseFloat(this.getMoney) > 0 && parseFloat(this.addMoney) === 0) {
                        return parseFloat(this.getMoney) * this.tax / 100
                    } else {
                        return 0
                    }
                }
            },
        },
        methods: {
            addSum() {
                if (this.addMoney > 0) {
                    this.moveMoney = true
                    return this.rakhunok += (parseFloat(this.addMoney) - this.percent)
                }
            },
            getSum() {
                if (this.getMoney > 0) {
                    
                    if (this.rakhunok < (parseFloat(this.getMoney) + this.percent)) {
                        // return console.log('red');
                    } else {
                        this.moveMoney = false
                        return this.rakhunok -= (parseFloat(this.getMoney) + this.percent)
                    }
                }
            },
            currency(money) {
                return this.rakhunok / money
            },
        }
    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>