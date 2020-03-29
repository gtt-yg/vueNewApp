<template>
  <div class="Reg">
    <h3>Reg</h3>
    <button @click="goback">←</button>
  </div>
</template>

<script>
  export default {
    beforeRouteLeave(to,from,next){
      console.log('组件内部守卫 后置',this)
      next()
    },
    
    name:'Reg',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
      
    },
    updated(){},
    methods:{
      goback(){
        this.$router.go(-1)
        // this.$router.back(-1)
      }
    }
  }
</script>

<style>
  .Reg{}
</style>
