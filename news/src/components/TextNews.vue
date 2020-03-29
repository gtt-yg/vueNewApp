<template>
    <router-link class="news" :to = "'/detail/' + data._id + '?apiName=' + apiName" tag = "div">
            <dl> <a>{{data.title}} </a></dl>
            <dl>
                <dt><a href="">置顶</a></dt>
                <dd><a href="">{{data.from}}</a></dd>
                <dd><a href="">{{data.comment}}评论</a></dd>
                <dd><a href="">{{data.time|timeFilter}}</a></dd>
            </dl>
        </router-link>
</template>

<script>


export default {
  name: 'TextNews',
  props:{
      data:{
        type:Object,
        required:true,
        default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
          //...
          return {}
        }
      },
      apiName:{
        type:String,
        default:null
      }
  },
  
  components: {
    
  },
  methods:{
    /* getDetail(){
        if(this.apiName){
          //路由跳转
          this.$router.push(`/detail`);
        }
      } */
  },
  
}
</script>

<style>
    .news{
    height: 0.76rem;
    border-bottom: 0.005rem solid #bbb;
    padding: 0.18rem 0;
    }
    .news dl{
        display: flex;
        justify-content: flex-start;
        align-items: center;  
    }
    .news dl:nth-child(1) a{
        font-size: 0.21rem;
    }
    .news dl:nth-child(2){
        font-size: 0.11rem;
        padding: 0.05rem 0;
    }
    .news dl:nth-child(2) dt{
        width: 0.45rem;
        height: 0.16rem;
        display: flex;
        justify-content: center;
        padding: 0 0.1rem;
        border:0.005rem solid #e66863;
        border-radius: 0.07rem;
    }
    .news dl:nth-child(2) dt a{
        color: #e66863;
        flex: 1;
    }
    .news dl:nth-child(2) dd{
        margin-left: 0.1rem;
    }
    .news dl:nth-child(2) dd a{
        color: #999;
    }
</style>
