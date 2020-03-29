<template>
  <div class="Goods">
    <h3>Goods</h3>
    <router-link to="/goods/1">商品001</router-link>
    <router-link to="/goods/2?a=1&b=2">商品002</router-link>
    <router-link :to="{name:'dt',params:{_id:3},query:{a:11,b:22}}">商品003</router-link>
    
    <router-view>子路由的展示区</router-view>
    
    <hr>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落</p>
    <p>段落落1</p>
  </div>
</template>

<script>
  export default {
    name:'Goods',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
  .Goods{}
</style>
