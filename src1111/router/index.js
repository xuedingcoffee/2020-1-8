import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    //动态路由
    path: '/about/:uname/id/:id', 
    name: 'bb',
    component: () => import(/* webpackChunkName: "about" */ '../views/dongtai.vue'),
    // beforeEnter(){
    //   console.log("进来了"); 
    // }
   },
    {
      path: '/qiantao/',
      component: () => import('../views/qiantao.vue'),
      children:[
        {
          path: 'p1',//  /public/p1  * 不要加 /不然就不匹配
          component: () => import('../views/p1.vue')        
        },
        {
          path: 'p2',
          component: () => import('../views/p2.vue')
        },
        //如果进入/public下没有指定的children,默认添加一个组件，可以在path上写个''
        // {
        //   path:'',
        //   component: () => import('../views/p3.vue')
        // }
      ]
    },
  ]
  const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//切换路由时触发
router.beforeEach((to,from,next)=>{
  console.log("切换路由时触发"),
  next();
}
)

export default router
