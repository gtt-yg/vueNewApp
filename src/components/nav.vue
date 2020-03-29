<template>
  <nav class="nav">
         
        <router-link 
            to="/follow"
            exact-active-class="navTitleActive"
        >关注
        </router-link>
        <router-link 
            to="/home"
            exact-active-class="navTitleActive"
            class = "navTitleActive"
        >推荐
        </router-link>
        <router-link 
            to="/hot"
            exact-active-class="navTitleActive"
        >热点
        </router-link>
        <router-link 
            to="/beijing"
            exact-active-class="navTitleActive"
        >北京
        </router-link>
        <router-link 
            to="/movies"
            exact-active-class="navTitleActive"
        >视频
        </router-link>
        <router-link 
            to="/customs"
            exact-active-class="navTitleActive"
        >国风
        </router-link>  
        
        <i class="iconfont">&#xe509;</i>
    </nav>
</template>

<script>

export default {
  name: 'Nav',
  props:[],
  components: {
    
  },
  
  methods:{
    
  },
  
}
</script>

<style>
    .nav{
    height: 0.35rem;
    display: flex;
    margin-top: 0.6rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.13rem;
    font-size: 0.17rem;
    border-bottom: 0.005rem solid #bbb;
}

    .nav .iconfont{
        font-size: 0.17rem;
}
.navTitleActive{
        color: #e66863; 
    }
</style>
