<template>
  <footer class="footer">
        <router-link
            exact-active-class = "footeractive"
            class = "footeractive" 
            to="/home"
            >
            <dt> <i class="iconfont">&#xe603;</i> </dt>
            <dd>首页</dd>
        </router-link>
        <router-link
            exact-active-class = "footeractive" 
            
            to="/movies"
            >
            <dt> <i class="iconfont">&#xe604;</i> </dt>
            <dd>西瓜视频</dd>
        </router-link>
        <router-link
            exact-active-class = "footeractive"
            
            to="/send"
            >
            <dt> <i class="iconfont">&#xe60f;</i> </dt>
            <dd>发头条</dd>
        </router-link>
        <router-link
            exact-active-class = "footeractive" 
            
            to="/smallVideo"
            >
            <dt> <i class="iconfont">&#xe613;</i> </dt>
            <dd>小视频</dd>
        </router-link>
        <router-link
            exact-active-class = "footeractive"
            
            to="/user"
            >
            <dt> <i class="iconfont">&#xe505;</i> </dt>
            <dd>我的</dd>
        </router-link>
    </footer>
</template>

<script>


export default {
  name: '',
  props:[],
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
  .footer{
    height: 0.42rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.footer a{
    display: flex;
    flex-flow: column;
    align-items: center;
}
.footer a dt .iconfont{
    font-size: 0.23rem;
}
.footeractive{
    color: red;
}
.noactive{
    color:#666
}
.footer a dd{
    font-size: 0.12rem;
}
</style>
