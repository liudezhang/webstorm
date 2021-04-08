import Vue from 'vue'
import VueRouter from "vue-router";

// 导入路由组件
// import Home from "@/components/Home";
// import About from "@/components/About";
// import User from "@/components/User";

// 路由懒加载的方式
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

// 1、注入插件
Vue.use(VueRouter)

// 3、定义路由
const routes = [
  // 配置默认路径
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    // 配置嵌套路由
    children: [
      {
        path: 'news',
        // 懒加载的方式
        component: () => import('../components/HomeNews')
      }, {
        path: 'message',
        component: () => import('../components/HomeMessage')
      }
    ]

  }, {
    path: '/about',
    component: About
  }, {
    path: '/user/:page',
    component: User
  }, {
    path: '/profile',
    component: () => import('../components/Profile')
  }
]

// 2、创建router实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'ldz'
})

// 4、导出router实例
export default router