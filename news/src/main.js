import Vue from 'vue';
import App from './layouts/App.vue'

//1. 引入路由配置
import router from './plugins/router.js'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import './filter/filter'
/* Vue.filter('dates',function(date){
  let d = new Date(date)
  return d.getFullYear()
}) */
//引入服务端地址配置
import server from './config/server'
import './plugins/axios'
Vue.prototype.$baseUrl = server.baseUrl//
/* import './assets/fonts/font' */
let vm = new Vue({
  el:'#app',
  data:{
    bHeader:false,
    bFrame:false,
    bFooter:false
  },
  render: h => h(App),
  router //1. 注册到根
})

export default vm