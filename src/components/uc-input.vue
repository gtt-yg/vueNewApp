<template>
  <div class="uc-input">
    <input :type="type" :value="value" @input="$emit('input',$event.target.value)"/>
    <span>{{label}}</span>
  </div>
</template>

<script>
  export default {
    name:'uc-input',
    props:{
      label:{
        type:String,
        default:'标题'
      },
      value:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      }
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .uc-input{border-bottom:1px solid #e5e7e8;height:0.5rem; position:relative;}
  .uc-input input{ padding-left:0.5rem;width:3rem;height:100%; font-size:0.2rem;}
  .uc-input span{width:0.5rem;height:0.49rem; position:absolute;top:0;left:0; border-right:1px solid #676868; color:#676868; font-size:0.22rem; line-height:0.49rem; text-align:center;}
</style>
