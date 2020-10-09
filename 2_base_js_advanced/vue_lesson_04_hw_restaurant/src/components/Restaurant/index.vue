<template>
    <div class="container">
        <div>
            <input type="text" v-model="inputMeal" placeholder="Add some meal" >
            <button
            @click="addMeal(inputMeal)"
            :disabled="!isDataValid"
            >Add</button>
        </div>
        <div class="menus">
            <menu-1 class="menu"
                :menuList1="menuList"
                @postponed="onPostponed"
            />
            <menu-2 class="menu"
                :menuList2="menuList2"
                @postponed2="onPostponed2"
            />
            <menu-3 class="menu"
                :menuList3="menuList3"
            />
        </div>
    </div>
</template>

<script>
    import Menu1 from "./Menu1"
    import Menu2 from "./Menu2"
    import Menu3 from "./Menu3"

    export default {
        name: 'Restaurant',

        components: {
            Menu1,
            Menu2,
            Menu3,
        },

        data() {
            return {
                menuList: ['Голубці', 'Вареники', 'Котлети', 'Борщ'],
                menuList2: [],
                menuList3: [],
                inputMeal: null,
            }
        },

        computed: {
            isDataValid() {
                return this.inputMeal
            },
        },

        methods: {
            addMeal(val) {
                this.menuList.push(val)
                this.inputMeal = ''
            },
            onPostponed(index) {
                this.menuList2.push(this.menuList[index])
                this.menuList.splice(index, 1)
            },
            onPostponed2(index) {
                this.menuList3.unshift(this.menuList2[index])
                this.menuList2.splice(index, 1)
            },
        },
    }
</script>

<style scoped>
    .container {
        background: rgba(185, 243, 209, 0.3);
    }
    .container ::placeholder {
        background: rgba(185, 243, 209, 0.3);
    }
    .container input {
        margin: 10px;
    }
    .menus {
        display: flex;
        flex-wrap: wrap;
    }
    .menu {
        width: 33.3%;
        height: auto;
        padding: 10px;
        border-radius: 5px;
    }
</style>