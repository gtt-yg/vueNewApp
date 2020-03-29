<template>
  <div v-if = 'data.title'>
    <Ucnav/>
    <div class="detail-header">
      <span>
        <img :src="$baseUrl + data.detail.icon" alt="">
      </span>
      <span>{{data.detail.auth}}</span>
    </div>
    <div class="detail-title">
      <h3>{{data.title}}</h3>
    </div>
    <div class="detail-content">
      <span>{{data.time| dates}}</span>
      <p>{{data.detail.content}}</p>
    </div>
  </div>
  <frame-screen v-else></frame-screen>
    
</template>

<script>
  import Ucnav from '../components/uc-nav'
  import FrameScreen from '../components/frame-screen.vue'
  import axios from 'axios'
  export default {
    name:'Detail',
    props:{},
    data(){
      return {
          data:{}
      }
    },
    components:{
      Ucnav,FrameScreen
    },
    mounted(){
      axios({
        url:`/api/goods/${this.$route.query.apiName}/${this.$route.params._id}`,
        params:{_page:1,_limit:3},
        
      }).then(
        res => {
          this.data = res.data.data
        }
      )
    },
    updated(){
    },
    methods:{
      
    }
  }
</script>

<style>
  .detail-header{
    width: 100%;
    height: 1rem;
    margin-top: 1rem;
  }
  .detail-header span{
    margin-left: 0.2rem;
  }
  .detail-header span img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .detail-title{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.1rem;
    border-bottom: 1px solid #999;
  }
  .detail-title h3{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .detail-content{
    width: 100%;
  }
  .detail-content span{
    padding-left: 0.5rem;
  }
  .detail-content p{
    text-indent: 0.35rem;
  }
</style>
