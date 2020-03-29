<template>
  <section class="content">
            <div class="videobox">
                <img :src="videoImg" alt="">
            </div>
            <div class="linkbox">
                <dl>
                    <dt> <img :src="icon" alt=""> </dt>
                    <dt><a href="">{{from}}</a></dt>
                    <dt> <a href="">关注</a> </dt>
                </dl>
                <dl>
                    <i class="iconfont">&#xe60e;</i>
                    <dd>{{comments}}</dd>
                    <dd>...</dd>
                </dl>
            </div>
        </section>
</template>

<script>


export default {
  name: 'MovieNews',
  props:{
      videoImg:{
          type:String,
          default:""
      },
      icon:{
          type:String,
          default:""
      },
      from:{
          type:String,
          default:""
      },
      comments:{
          type:Number,
          default:0
      }
  },
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
  .content{
    height: 2.75rem;
    background: #fff;
}
.content .videobox{
    height: 2.15rem;
}
.content .videobox img{
    height: 100%;
}
.content .linkbox{
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.13rem;
}
.content .linkbox dl{
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content .linkbox dl:nth-child(1) dt:nth-child(1){
    width: 0.41rem;
    height: 0.41rem;
    border-radius: 50%;
}
.content .linkbox dl:nth-child(1) dt:nth-child(1) img{
    width: 100%;
}
.content .linkbox dl:nth-child(1) dt:nth-child(2) a{
    font-size: 0.17rem;
    font-weight: bolder;
    padding: 0 0.1rem;
    border-right: 0.005rem solid #bbb;
}
.content .linkbox dl:nth-child(1) dt:nth-child(3) a{
    font-size: 0.17rem;
    color: #e66863;
    padding-left: 0.1rem;
}
.content .linkbox dl:nth-child(2) .iconfont{
    font-size: 0.3rem;
}
.content .linkbox dl:nth-child(2) dd{
    font-size: 0.17rem;
    padding:0 0.1rem 0 0.05rem;
}
</style>
