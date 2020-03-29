<template>
    <router-link class="tuwen" :to = "'/detail/' + data._id + '?apiName=' + apiName" >
            <a href="">{{data.title}}</a>
            <dl class="photolink">
                <a href=""><img :src="$baseUrl +  data.detail.images1" alt=""></a>
                <a href=""><img :src="$baseUrl +  data.detail.images2" alt=""></a>
                <a href=""><img :src="$baseUrl +  data.detail.images3" alt=""></a>
            </dl>
            <dl class="laiyuan">
                <dl>
                    <dt>{{data.from}}</dt>
                    <dd>{{data.comment}}评论</dd>
                    <dd>{{data.time|timeFilter}}</dd>
                </dl>
                <dl>
                    <a href=""><img src="/images/index_09.png" alt=""></a>
                </dl>
            </dl>
    </router-link>
</template>

<script>


export default {
  name: 'ImgNews',
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
      /* goDetail(){
              this.router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
      } */
  },
  
}
</script>

<style>
    .tuwen{
    height: 1.74rem;
    display: flex;
    flex-flow: column;
    padding: 0.1rem 0;
    border-bottom: 0.005rem solid #bbb;
}
.tuwen a{
    font-size: 0.21rem;;
}
.tuwen .photolink{
    height: 0.75rem;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.07rem 0;
}
.tuwen .photolink a{
    width: 33%;
}
.tuwen .photolink a img{
    width: 100%;
}
.tuwen .laiyuan{
    display: flex;
    justify-content: space-between;
}
.tuwen .laiyuan dl:first-child{
    width: 2rem;
    height: 0.12rem;
    font-size: 0.11rem;
    display: flex;
    color: #999;
}
.tuwen .laiyuan dl:first-child dd{
    margin-left: 0.1rem;
}
.tuwen .laiyuan dl:last-child{
    width: 0.2rem;
    height: 0.12rem;
}
.tuwen .laiyuan dl:last-child a{
    display: flex;
    height: 0.12rem;
}
.tuwen .laiyuan dl:last-child a img{
    height: 0.11rem;
}
.tuwen .laiyuan dl:first-child .guanggao{
    width: 0.45rem;
    height: 0.13rem;
    padding: 0 0.1rem;
    border:0.005rem solid #bbb;
    border-radius: 0.07rem;
}
</style>
