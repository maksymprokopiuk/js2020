<template>
    <div class="filter-section">
        <div>
            Ціна
            <div class="price">
            <input type="number" min="0" v-model="minPrice" placeholder="min">
            -
            <input type="number" min="0" v-model="maxPrice" placeholder="max">
            </div>
        </div>
        <div>
            Рік
            <div>
                <select v-model="year">
                    <option v-for="item in yearsList" :key="item"
                        :value="item">{{item}}</option>
                </select>
            </div>
        </div>
        <div>
            Категорія
            <div>
                <!-- <select v-model="category">
                    <option v-for="cat in categoriesList" :key="cat.id"
                        :value="cat.id">{{cat.title}}</option>
                </select> -->
                <select v-model="category">
                    <option v-for="cat in categoriesList" :key="cat"
                        :value="cat">{{cat}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterSection',

        props: {
            yearsList: {
                type: Array,
                default: ()=>[]
            },
            categoriesList: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                minPrice: null,
                maxPrice: null,
                year: 'Усі роки',
                // category: '',
                category: 'Усі категорії',
            }
        },

        watch: {
            minPrice(newValue) {
                this.$emit('filter-changed', {
                    minPrice: newValue || null
                })
            },
            maxPrice(newValue) {
                this.$emit('filter-changed', {
                    maxPrice: newValue || null
                })
            },
            year(newValue) {
                this.$emit('filter-changed', {
                    prodYear: newValue || null
                })
            },
            category(newValue) {
                this.$emit('filter-changed', {
                    category: newValue || null
                })
            },
        },
    }
</script>

<style scoped>
    .filter-section {
        flex: 0 0 130px;
        background-color: bisque;
    }
    .price input {
        width: 50px;
    }
</style>