<template>
    <div>
        <div class="frame">
            <div class="frame-title"></div>
            <div class="frame-list">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="frame">
            <div class="frame-title"></div>
            <div class="frame-list">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FrameScreen',
  
  components: {
    
  },
  methods:{},
  
}

</script>
<style>
    .frame{
        display: flex;
        flex-direction: row;
        height: 2rem;
        padding: 0.1rem;
        margin-top: 0.3rem;
    }
    .frame-title{
        width: 1rem;
        height: 2rem;
        background: #999;
    }
    .frame-list{
        margin-left: 0.1rem;
        width: 2rem;
        height: 2rem;
    }
    .frame-list div{
        width: 2rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        background: #999;
    }
</style>