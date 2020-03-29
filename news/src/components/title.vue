<template>
    <span
    >{{data}}</span>
</template>

<script>


export default {
  name: 'Title',
  props:{
      data:{
          type:String,
          default:'标题',
          required:true
      }
  },
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
    
    
   
</style>
