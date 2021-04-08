// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from "vue-router";


// 导入组件
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 路由懒加载的方式
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

// 1、通过vue.use（插件），
Vue.use(VueRouter)

// 配置路由和组件之间的映射关系
const routes = [
  {
    // 配置默认路径，根路径
    path: '/',
    // 重定向
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    // meta 元数据（描述数据的数据）
    meta: {
      title: '首页',
      keepAlive: true
    },
    // 嵌套路由的
    children: [
      {
        path: '',
        redirect: '/home/news'
      },
      {
        path: 'news',
        name: 'news',
        component: HomeNews,
        meta: {
          title: '新闻',
          keepAlive: true
        },
      }, {
        path: 'message',
        name: 'message',
        component: HomeMessage,
        meta: {
          title: '消息',
          keepAlive: true
        },
      }
    ]
  }, {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',
      keepAlive: true
    },
  }, {
    // 动态路由
    path: '/user/:userId',
    name: 'user',
    component: User,
    meta: {
      title: '用户',
      keepAlive: true
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '档案',
      keepAlive: true
    },
  }
]
// 创建路由实例
// 2、插件VueRouter对象
const router = new VueRouter({

  routes,
  // mode 模式  默认是hash模式  现在改成了H5的history模式
  mode: 'history',
  // 修改默认的class类名称
  linkActiveClass: 'active'
})

/********导航守卫的使用********/
// 以下的都是全局守卫
// 前置守卫（guard）   跳转之前
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to);
  // 执行下一步，必须调用
  next()
})

// 后置钩子（hook）   跳转之后
router.afterEach((to, from) => {
// 后置钩子不需要next
})

// 3、将router对象导出传入到Vue实例中
export default router
