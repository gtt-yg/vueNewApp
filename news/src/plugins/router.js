import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue'
import Movies from '../pages/Movies.vue'
import User from '../pages/User.vue'
import NoPage from '../layouts/NoPage.vue'
import Follow from '../pages/Follow.vue'
import Hot from '../pages/Hot.vue'
import Customs from '../pages/Customs.vue'
import Beijing from '../pages/Beijing.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'



//2 安装插件
Vue.use(VueRouter)

//3. 路由配置
let routes=[
  {path: '/home',component: Home, meta: { requiresAuth: true }}, //route  一条路由的配置
  /* {
    path: '/goods',
    component: Goods,
    children:[
      {path:':_id',component:Detail,name:'dt'}
    ]
  }, 
  {
    path: '/user',
    component: User,
    /* beforeEnter:(to,from,next)=>{
      //to from == route
      console.log('路由独享守卫 前置')
      
      if(Math.random()<.5){
        next()
      }else{
        next('/login')
      }
    } 
  }, */ 
  {path: '/beijing',component: Beijing}, 
  {path: '/customs',component: Customs}, 
  {path: '/follow',component: Follow}, 
  {path: '/hot',component: Hot},
  {path: '/user',component: User},
  {path: '/login',component: Login},  
  {path: '/reg',component: Reg},  
  {path: '/movies',component: Movies},
  {path: '/detail/:_id',component: Detail},
  {path: '/',redirect: '/home'},//路由重定向
  {path: '*',component: NoPage}
];

//4.路由实例
let router=new VueRouter({
  // routes:[配置]
  // routes:routes
  routes,
  mode:'history',//路由模式
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }//返回路由跳转后的横向和纵向滚动位置
  } */
})



//全局守卫

//前置
/* router.beforeEach((to,from,next)=>{
  console.log('全局守卫 前置')
  //..业务
  
  //	to: 目标路由 route
  //	from: 当前路由 route
  //  next() 跳转  一定要调用
  //  next() == next(true)
  // next(false);//走不了
  // next(true);//走你
  // next({path:'/detail/2',params:{},query:{}})//带点货
  next()
}) */

//后置
/* router.afterEach((to,from)=>{
  console.log('全局守卫 后置',to,from)
}) */

//5.导出路由实例，让他去控制vue根
export default router;