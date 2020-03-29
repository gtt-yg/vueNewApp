
import axios from 'axios'
import Vue from 'vue'
import router from './router'
import '../main'
import vm from '../main';
axios.interceptors.request.use(function (config) {
  //设置通用请求头  
  //设置通用 baseUrl  http://api.douban.com
  //强制设置提交方式 post
  // config == 配置               // axios({配置})
  // config.headers = {'X-Requested-With': 'XMLHttpRequest'}

  //修改bLoading = true
  // this.$root.bLoading=true;  ×
  let token = window.localStorage.getItem('user')
  token = token ? JSON.parse(window.localStorage.getItem('user')).token : ''
  config.headers={
    token: token
  } 

  return config;
}, function (error) {
  // Do something with request error


  //控制骨架屏的显示或隐藏
  vm.bFrame = true
  return Promise.reject(error);
});
// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
    //console.log('响应时拦截器',response.data.err);
    //response  ~~ axios请求后的res
    // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
    
    //校验返回数据，token过期，路由跳转login,传递当前路由地址
    let currentRoute = router.currentRoute.fullPath;//获取当前路由全路径，string
    //console.log(currentRoute)
    if(response.data.err===2 && !currentRoute.includes('/login')){
      router.replace({
        path:'/login',
        query:{p:currentRoute}
      })
    }
    //控制骨架屏的显示或隐藏
    vm.bFrame = false
    return response;//奔向组件
  }, function(error) {
    // 错误的响应，拦截
    return Promise.reject(error);
  });

  Vue.prototype.$axios = axios;
  window.axios = axios;
  export default axios;