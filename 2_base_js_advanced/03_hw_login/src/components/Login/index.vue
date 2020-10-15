<template>
    <div>
        <div>
            <label>
                <span>Login</span>
                <input type="text" v-model="inputLogin" placeholder="Enter your login">
            </label>
        </div>
        <div>
            <label>
                <span>Password</span>
                <input type="text" v-model="inputPassword" placeholder="Enter your password">
            </label>
        </div>
        <div>
        <button @click="onLogin">Login</button>
        </div>
        <div 
            class="message-yellowgreen"
            :class="{ // 1 'message-blue': authResult && this.inputLogin === 'Іван', чому не робить?
                'message-blue': authResult,
                'message-red': authResult === false,
                'message-ivan': authResult === false && this.inputLogin === 'Іван', // треба створювати додатково
            }"
            > {{ message }}
        </div>
        <div v-show="authResult">
            <img :src="imgSmile">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        props: {
            usersCreds: {
                type: Array,
                default: ()=>[]
            },
            imgSmile: {
                type: String,
                default: 'data:image/png;base64,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'
            }
        },
        data() {
            return {
                inputLogin: null,
                inputPassword: null,
                authResult: null,
            }
        },

        computed: {
            message() {
                if (this.authResult === true) {
                    return 'Welcome'
                } else if (this.authResult === false) {
                    return 'Wrong login or password'
                } else {
                    return 'Input your login and password'
                }
            }
        },

        methods: {
            onLogin() {
                if (this.inputLogin && this.inputPassword) {
                    const user = this.usersCreds.find(item=>item.log === this.inputLogin && item.pass === this.inputPassword)
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
    div {
        margin: 5px;
        font-size: 18px;
    }
    span {
        display: inline-block;
        width: 85px;
    }
    .message-yellowgreen {
        color: yellowgreen;
    }
    .message-blue {
        color: blue;
    }
    .message-red {
        color: red;
    }
    .message-ivan {
        color: blue;
    }
</style>