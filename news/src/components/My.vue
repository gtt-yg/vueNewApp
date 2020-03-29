<template>
  <div>
    <header class="header">
        <dl class="dl1">
            <dt class="imgdt">
                <img :src="$baseUrl + icon" alt="">
            </dt>
            <dl>
                <dt>{{nikename}}</dt>
                <dd><a href="">申请认证</a></dd>
            </dl>
            
        </dl>
        <span @click="layout">注销</span>
        <dl class="dl2">
            <i class="iconfont">&#xe514;</i>
        </dl>
  </header>
  <nav>
        <dl>
            <dd>{{headline}}</dd>
            <dt>头条</dt>
        </dl>
        <dl>
            <dd>{{follow}}</dd>
            <dt>关注</dt>
        </dl>
        <dl>
            <dd>{{fans}}</dd>
            <dt>粉丝</dt>
        </dl>
        <dl>
            <dd>{{ass}}</dd>
            <dt>获赞</dt>
        </dl>
    </nav>
  </div>
</template>

<script>


export default {
  name: 'My',
  props:{
    icon:{
        type:String,
        default:"/upload/my.jpg"
    },
    nikename:{
        type:String,
        default:"二狗"
    },
    headline:{
        type:Number,
        default:0
    },
    follow:{
        type:Number,
        default:0
    },
    fans:{
        type:Number,
        default:0
    },
    ass:{
        type:Number,
        default:0
    },
  },
  components: {
    
  },
  methods:{
    layout(){
        window.localStorage.removeItem('user')
        this.$router.push('/login')
    }
  },
  
}
</script>

<style>
  .header{
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
.header .dl1{
    display: flex;
    width: 1.8rem;
    height: 0.75rem;
    justify-content: space-between;
    align-items: center;
    padding:  0 0.15rem;
}

.header .dl1 .imgdt{
    width: 0.65rem;
    height: 0.65rem;
}
.header .dl1 .imgdt img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.header .dl1 dl dt{
    font-size: 0.18rem;
}
.header .dl1 dl dd {
    display: flex;
}
.header .dl1 dl dd a{
    height: 0.2rem;
    font-size: 0.13rem;
    color: #fff;
    background: #e6645f;
    padding: 0 0.08rem;
    border-radius: 0.1rem;
}
.header .dl2{
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
}
.header .dl2 .iconfont{
    font-size: 0.15rem;
    color: #000;
    font-weight: bolder;
    flex: 1;
}
/* nav*/
nav{
    height: 0.54rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
}
nav dl{
    display: flex;
    flex-flow: column;
    align-items: center;
}
nav dl dd{
    font-size: 0.17rem;
    font-weight: bolder;
}
</style>
