<template>
    <div class="filter-section">
        <div>
            Ціна
            <div class="price">
            <input type="number" placeholder="min">
            -
            <input type="number" placeholder="max">
            </div>
        </div>
        <div>
            Рік
            <div>
                <select>
                    <option>2020</option>
                </select>
            </div>
        </div>
        <div>
            Категорія
            <div>
                <select>
                    <option></option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterSection',
    }
</script>

<style scoped>
    .filter-section {
        width: 200px;
        background-color: bisque;
    }
    .price input {
        width: 50px;
    }
</style>