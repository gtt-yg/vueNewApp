<template>
  <div class="app">
   <!--  <h3>app</h3> -->
    
    <!-- **声明式跳转** -->
    <!-- <div class="app__nav">
      <router-link to="/home" active-class="app__nav--active">首页</router-link>
      <router-link to="/goods" active-class="app__nav--active">商品</router-link>
      <router-link to="/user" active-class="app__nav--active">用户</router-link>
      <router-link to="/login" active-class="app__nav--active">登录</router-link>
      <router-link event="mouseover" to="/reg" exact-active-class="app__nav--active" tag="span">注册</router-link>
    </div> -->
    <Headers v-if = "this.$root.bHeader"/>
    <router-view>展示路由跳转后的组件</router-view>
    <Footers v-if = "this.$root.bFooter"/>
  </div>
</template>

<script>
  import Headers from './Headers.vue'
  import Footers from './Footers.vue'

  export default {
    name:'app',
    data(){
      return {
         
      }
    },
    methods:{
      
    },
    watch:{
      $route:{
      handler(nextValue,PrevValue){
        /* console.log("fsdfdsf",nextValue.path) */
        let path = nextValue.path
        if(/home|follow|hot|beijing|customs|movies/.test(path)){
          this.$root.bHeader = this.$root.bFooter = true
        }
        if(/detail|login|reg/.test(path)){
          this.$root.bHeader = this.$root.bFooter = false
        }
        if(/user/.test(path)){
          this.$root.bFooter = true;
          this.$root.bHeader =false
        }
      },
      immediate:true
  }
    },
    components:{
      Headers,Footers
    }
  }
</script>

<style>
  .app__nav{
    position: fixed;
    left:0;top:0;
  }
  .app__nav--active{
    background: #399;
    color:#fff
  }
</style>
