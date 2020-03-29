<template>
  <div class="content">
    
    <uc-nav arrow="gray" bgColor="transparent" :borderWidth="0"/>
    
    <h1></h1>
    
    <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <router-link to="/login">登录</router-link>
        <span></span>
        <router-link to="/reg">注册</router-link>
      </div>
      <p class="rsolid"></p>
    </div>
    
    <div class="input">
      <!-- <uc-input :label="'账号'" type="text" :value="username" @input="checkUser" /> -->
      <uc-input :label="'账号'" type="text" v-model="username" />
      <uc-input label="密码" type="password" v-model="password" />
      {{errorMessage}}
    </div>
    
    <div class="footbox">
      <Buttons text="登录"  @click="login"/>
      <a href="javascript:;" class="tishi">忘记密码？</a>
    </div>
  </div>
</template>

<script>
  import Buttons from '../components/Button.vue'
  import UcInput from '../components/uc-input.vue'
  import UcNav from '../components/uc-nav'
  import axios from 'axios'
  export default {
    name: 'Login',
    props: {},
    data() {
      return {
        username:'',
        password:'',
        errorMessage:''
      }
    },
    components: {
      Buttons,UcInput,UcNav
    },
    mounted() {},
    updated() {},
    methods: {
      /* checkUser(val){
        console.log('checkUser',val);
        this.username = val;
      } */
      
      login(){
        axios({
          url:'/api/login',
          method:'post',
          data:{
            username:this.username,
            password:this.password
          }

        }).then(
          res =>{
            if(res.data.err === 1){
              this.errorMessage = res.data.msg;
            }else{
              window.localStorage.setItem('user',JSON.stringify(res.data))
              if(this.$route.query.p){
                this.$router.replace(this.$route.query.p)
              }else{
                this.$router.replace('/home')
              }
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  .content{width:100%; margin:0 auto;}
  .content .fhbtn{ padding-top:0.27rem;}
  .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
  .content h1{width:1.6rem;height:1rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:0.9rem;}
  .content .login{width:1.6rem;height:0.38rem; margin:0 auto; margin-top:0.5rem;}
  .login a{width:0.5rem;height:0.38rem; font-size:0.25rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
  .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
  .content .login-box{ position:relative;}
  .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0.5rem;left:0.1rem;}
  .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0.5rem;right:0.1rem;}
  .content div.input{height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
  
  .content .footbox{height:0.65rem;margin:0 auto; }
  
  .content .tishi{ font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
