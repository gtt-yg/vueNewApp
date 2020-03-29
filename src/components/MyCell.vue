<template>
  <section class="moneytell">
    <aside>
      <dl>
          <dd>{{title}}</dd>
      </dl>
      <dl>
          <dd>{{content}}</dd>
          <dt><i class="iconfont">&#xe514;</i></dt>
      </dl>
    </aside>
  </section>
</template>

<script>


export default {
  name: 'MyCell',
  props:{
    title:{
      type:String,
      default:"我的"
    },
    content:{
      type:String,
      default:""
    }
  },
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
  .moneytell{
    background: #fff;
    padding: 0 0.16rem;
}
.moneytell aside {
    height: 0.47rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 
.moneytell aside:nth-child(1){
    border-bottom: 0.005rem solid #ccc;
}
.moneytell aside:nth-child(1) dl{
    height: 0.47rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 
.moneytell aside dl:nth-child(1){
    font-size: 0.16rem;
    font-weight: bolder;
}
.moneytell aside dl:nth-child(2){
    font-size: 0.13rem;
    color: #999;
}
</style>
