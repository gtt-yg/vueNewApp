<template>
  <header class="navHead">
        <form action="">
            <i class="iconfont">&#xe502;</i>
            <input type="text" placeholder="宾利mini图片|李小龙经典打斗视频|算法代付电费的方法">
        </form>
  </header>
</template>

<script>


export default {
  name: '',
  props:[],
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
  .navHead{
    height: 0.48rem;
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: #c34943;
}
  .navHead form{
    width: 3.45rem;
    height: 0.42rem;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
  .navHead form .iconfont{
    width: 0.3rem;
    height: 0.42rem;
    padding: 0 0 0 0.13rem;
    display: flex;
    align-items: center;
    font-size: 0.15rem;
    color: #999;
}
  .navHead form input{
    height: 0.42rem;
    flex: 1;
    border: none;
    outline: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.15rem;
    padding-left: 0.05rem;
}
  .navHead form input::-webkit-input-placeholder{
    color:#000
}
</style>
