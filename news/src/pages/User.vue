<template>
  <div>
    <My
      :nikename = "me.nikename"
      :headline = "me.headline"
      :follow = "me.follow"
      :fans = "me.fans"
      :ass = "me.ass"
      :icon = "me.icon"
    />
    <MyImforma/>
    <MyCell
      v-for = "(item,index) of list"
      :title = "item.title"
      :content = "item.content"
      :key = "index"
    />
    
  </div>
</template>

<script>

import My from '../components/My.vue';
import MyImforma from '../components/MyImforma.vue';
import MyCell from '../components/MyCell';
import axios from 'axios'
export default {
  name: 'User',
  props:[],
  beforeRouteEnter(to,from,next){
      
      let local = window.localStorage.getItem('user')
      
      if(!local){
        next('/login')
        return;
      }
      
      axios({
        url:'/api/user',
        method:'post',
        headers:{
          token: JSON.parse(local).token
        }
      }).then(
        res=>{
          
          if(res.data.err==0){
            next(_this=>_this.me=res.data.data)
          }else{
            next('/login')
          }
        }
      )
    },
  data(){
    return{
      me:[],
      list:[
        {title:"我的收藏",content:"话费优惠，速充值"},
        {title:"消息通知",content:""},
        {title:"扫一扫",content:""},
        {title:"免流量服务",content:""},
        {title:"阅读公益",content:"今日阅读1分钟"},
        {title:"广告投放",content:""},
        {title:"用户反馈",content:""},

      ]
    }
  },
  components: {
    My,MyImforma,MyCell
  },
  methods:{},
  
}
</script>

<style>
  
</style>
