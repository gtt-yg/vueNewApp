<template>
  <div class="User">
    <h3>User</h3>
    <!-- {{$route.query.user}} -->
    {{user}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    beforeRouteEnter(to, from, next) {
      // console.log('组件内部守卫 前置',this)

      /* axios({
        url:'/data/user.json'
      }).then(
        res=>{
          to.query.user = res.data;//把预载的数据绑定到目标路由身上
          next()
        }
      ) */

      axios({
        url: '/data/user.json'
      }).then(
        res => {
          next(_this => _this.user = res.data)
        }
      )

    },


    name: 'User',
    props: {},
    data() {
      return {
        user:'-'
      }
    },
    components: {},
    mounted() {
      console.log('user mounted');
    },
    updated() {
      console.log('user updated');
    },
    methods: {}
  }
</script>

<style>
  .User {}
</style>
