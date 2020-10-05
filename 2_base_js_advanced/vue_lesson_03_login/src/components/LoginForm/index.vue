<template>
    <div>
        <div>
            <label>
                Login
                <input type="text" v-model="login" placeholder="Input login here">
            </label>
        </div>
        <div>
            <label>
                Password
                <input type="text" v-model="password" placeholder="Input pass here">
            </label>
        </div>
        <button 
          :disabled="!isDataValid" 
          @click="onLogin"
        >Go</button>
        <div
            class="message"
            :class="{
            'message-ok':authResult,
            'message-error':authResult === false
        }">{{message}}</div>
        <div v-if="authResult">
            Secret
        </div>
        <div v-if="authResult===false">
            No secret
        </div>
    </div>
</template>
<script>
    export default {
        name:"LoginForm",
        props: {
            loginsList: {
                type: Array,
                default: ()=>[]
            }
        },
        data() {
            return {
                login: null,
                password:null,
                
                authResult:null
            }
        },
        computed: {
            isDataValid() {
                return this.login&&this.password
            },
            message() {
                if (this.authResult) {
                    return 'Welcome'
                } 
                if (this.authResult === false) {
                    return 'Wrong'
                }
                return 'Input '
            }
        },
        methods: {
            onLogin() {
                if(this.login&&this.password){
                    this.authResult=null
                  const user=this.loginsList.find(item=>item.log===this.login&&item.pass===this.password)
                  if(user) {
                    //   this.message='Welcome!'
                      this.authResult=true
                  }
                  else {
                    //   this.message='Login or password is incorrect'
                      this.authResult=false
                  }
                }
            }
        },
    }
</script>
<style lang="css" scoped>
.message {
    color: yellow
}
.message-ok{
    color: blue;
}
.message-error{
    color: red;
}
</style>