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
              apiName = "home"
            />
            <ImgNews
              v-for = "(item,index) of data2"
              :data = "item"
              :key = "item._id"
              apiName = "movies"
            />
            
        </div>
  </div>
</template>

<script>
import Navs from '../components/nav.vue';
import TextNews from '../components/TextNews.vue';
import ImgNews from '../components/ImgNews.vue';
import axios from 'axios'
export default {
  name: 'Home',
  props:[],
  components: {
    Navs,TextNews,ImgNews
  },
  data(){
      return {
          data1:[
            ],
          data2:[
          
          ]
      }
  },
  mounted() {
    axios({
      url:'/api/goods/home',
      params:{_page:1,_limit:3},
      
    }).then(
      res => {  
      this.data1 = res.data.data
      }
    )
    axios({
      url:'/api/goods/movies',
      params:{_page:1,_limit:3},
      
    }).then(
      res => {
        this.data2 = res.data.data
      }
    )
  },
  updated() {
    
  },
  
}
</script>

<style>
    .home{
    height: 6.5rem;
    overflow: auto;
    padding: 0 0.13rem;
}
</style>
