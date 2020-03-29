<template>
  <div>
    <div>
      <Navs/>
  </div>
  <div class="home">

      <TextNews
        v-for = "(item,index) of data1"
        :key = "item._id"
        :data = "item"
        apiName = "hot"
      />
  </div>
  </div>
</template>

<script>
import Navs from '../components/nav.vue';
import TextNews from '../components/TextNews.vue';
import axios from 'axios'
export default {
  name: 'Hot',
  props:[],
  components: {
    Navs,TextNews
  },
  data(){
      return {
          data1:[
              
            ],
          
      }
  },
  mounted() {
    axios({
      url:'/api/goods/hot',
      params:{_page:1,_limit:10},
    }).then(
      res => {
        
        let day = new Date()
        let time = day.getTime() 
        for (let i = 0; i < res.data.data.length; i++){
          time = time - res.data.data[i].time
          if(time < 1000 * 60 *5){
            res.data.data[i].time = "刚刚"
          }else{
            res.data.data[i].time = "大于5分钟"
          }
          time = day.getTime()
        }
        
        this.data1 = res.data.data
      }
    )
  },
 
  methods:{},
  
}
</script>

<style>
    .home{
    height: 6.5rem;
    overflow: auto;
    padding: 0 0.13rem;
}
</style>
