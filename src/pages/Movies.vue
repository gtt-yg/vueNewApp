<template>
  <div>
    
    <MovieNews
      v-for = "(item,index) of list"
      :videoImg = "item.videoImg"
      :icon = "item.icon"
      :from = "item.from"
      :comments = "item.comments"
      :key = "index"
    />
  </div>
</template>

<script>

import MovieNews from '../components/MovieNews.vue';
export default {
  name: 'Movies',
  props:[],
  components: {
    MovieNews
  },
  data(){
    return{
      list:[
        {videoImg:"/images/video_02.png",icon:"/images/video_05.png",from:"头条NBA",comments:666},
        {videoImg:"/images/video_02.png",icon:"/images/video_05.png",from:"腾讯NBA",comments:999}
      ]
    }
  },
  methods:{},
 
}
</script>

<style>

</style>
