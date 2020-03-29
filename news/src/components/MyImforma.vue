<template>
  <section class="iconlist">
        <dl>
            <dt>
                <i class="iconfont">&#xe60b;</i>
            </dt>
            <dd>我的收藏</dd>
        </dl>
        <dl>
            <dt>
                <i class="iconfont">&#xe51d;</i>
            </dt>
            <dd>我的评论</dd>
        </dl>
        <dl>
            <dt>
                <i class="iconfont">&#xe506;</i>
            </dt>
            <dd>我的点赞</dd>
        </dl>
        <dl>
            <dt>
                <i class="iconfont">&#xe504;</i>
            </dt>
            <dd>浏览历史</dd>
        </dl>
    </section>
</template>

<script>


export default {
  name: 'MyImforma',
  props:[],
  components: {
    
  },
  methods:{},
  
}
</script>

<style>
    .iconlist{
    height: 0.8rem;
    margin: 0.07rem 0 0.07rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
}
.iconlist dl{
    display: flex;
    flex-flow: column;
    align-items: center;
}
.iconlist dl dt .iconfont{
    font-size: 0.23rem;
}
.iconlist dl:nth-child(1) dt .iconfont{
    color: #f3b46a;
}
.iconlist dl:nth-child(2) dt .iconfont{
    color: #63a3ea;
}
.iconlist dl:nth-child(3) dt .iconfont{
    color: #eb825d;
}
.iconlist dl:nth-child(4) dt .iconfont{
    color: #52a590;
}
.iconlist dl dd{
    font-size: 0.15rem;
    margin-top: 0.07rem;
}
</style>
