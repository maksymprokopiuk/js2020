<template>
    <div>
        <div>
            <label>
                <span>Login</span>
                <input type="text" v-model="login" value="Vasja" placeholder="Login">
            </label>
        </div>
        <div>
            <label>
                <span>Password</span>
                <input type="text" v-model="password" placeholder="Password">
            </label>
        </div>
            <button
                :disabled="!isDataValid"
                @click="onLogin"
            >Go</button>
        <div
            class="message"
            :class="{
                'message-ok': authResult,
                'message-error': authResult === false
            }"
        >{{ message }}</div>
        <div v-if="authResult">
            S E C R E T
        </div>
        <div v-if="authResult===false">
            No secret
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        // components

        // дані які прийшли із зовні!
        props: {
            loginsList: {
                type: Array,
                default: ()=> []
            },
        },

        // дані які визначаються в середені!
        data() {
            return {
                login: null,
                password: null,
                authResult: null,
            }
        },

        computed: {
            isDataValid() {
                return this.login && this.password 
            },
            message() {
                if (this.authResult) {
                    return 'Welcome'
                } 
                if (this.authResult === false) {
                    return 'Wrong'
                }
                return 'Input your login and password'
            }
        },

        methods: {
            onLogin() {
                if (this.login && this.password) {
                    const user = this.loginsList.find(item => item.log === this.login && item.pass === this.password)
                    if (user) {
                        this.authResult = true
                    } else {
                        this.authResult = false
                    }
                }
            }
        },
        
    }
</script>

<style scoped>
    .message {
        color: yellowgreen;
    }
    .message-ok{
        color: blue;
    }
    .message-error{
        color: red;
    }
    span {
        display: inline-block;
        width: 70px;
        /* border: 1px solid #000; */
        margin: 5px;
    }
</style>