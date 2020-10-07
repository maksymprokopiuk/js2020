<template>
    <div>
        <div class="ticket">
            <div><span>КВИТОК</span></div>
            <span>Виберіть клас</span>
            <div>
                <select v-model="chosedClass">
                    <option value="business">Business</option>
                    <option value="econom">Econom</option>
                </select>
                <!-- <span>{{ chosedClass }}</span> -->
            </div>
            <div v-show="chosedClass === 'business'" class="business">
                <div>
                    <input type="checkbox" name="" id="" v-model="checkedNewspaper"> газета
                </div>
                <div>
                    <input type="checkbox" name="" id="" v-model="checkedKonjak"> коньяк
                    <div v-show="checkedKonjak">
                        закуска
                        <input type="radio" name="sneck" value="yes" v-model="sneck"> так
                        <input type="radio" name="sneck" value="no" v-model="sneck"> ні
                    </div>
                </div>
                <button @click="getOrder">Підтвердити</button>
            </div>
            <div v-show="chosedClass === 'econom'" class="econom">
            <!-- <div class="econom"> -->
                <div>
                    <input type="checkbox" name="" id="" v-model="checkedBeer"> пиво
                    <div v-show="checkedBeer">
                        <input type="radio" name="beerClass" value="light" v-model="beerClass"> надаю перевагу світлому
                        <input type="radio" name="beerClass" value="dark" v-model="beerClass"> надаю перевагу темному
                    </div>
                </div>
                <div>
                    <input type="checkbox" name="" id="" v-model="checkedChips"> чіпси
                </div>
                <button @click="getOrder">Підтвердити</button>
            </div>
        </div>
        <div class="result-order">
            <span>{{ resultOrder }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ticket',

        data() {
            return {
                chosedClass: null,
                checkedNewspaper: null,
                checkedKonjak: null,
                sneck: null,
                beerClass: null,
                checkedBeer: null,
                checkedChips: null,
                resultOrder: '',
            }
        },
        methods: {
            getOrder() {
                if (this.chosedClass === 'business') {
                    if (this.checkedNewspaper||this.checkedKonjak) {
                        return this.resultOrder = `
                        Ви вибрали клас Business. Додатково: 
                        ${this.checkedNewspaper?'газета':''}
                        ${this.checkedKonjak?'коньяк':''}
                        ${this.checkedKonjak&&this.sneck==='yes'?'закуска':''}
                        `
                    } else {
                        return this.resultOrder = 'Ви вибрали клас Business.'
                    }
                }
                if (this.chosedClass === 'econom') {
                    if (this.checkedBeer||this.checkedChips) {
                        return this.resultOrder = `
                        Ви вибрали клас Econom. Додатково: 
                        ${this.checkedBeer?'пиво':''}
                        ${this.checkedBeer&&this.beerClass==='light'?'світле':''}
                        ${this.checkedBeer&&this.beerClass==='dark'?'темне':''}
                        ${this.checkedChips?'чіпси':''}
                        `
                    } else {
                        return this.resultOrder = 'Ви вибрали клас Econom.'
                    }
                }
                
            }
        },
        
    }
</script>

<style scoped>
    .ticket {
        padding: 5px;
    }
</style>