<template>
  <div id="app">
    <!--
      <router-link>该标签是一个vue-router中已经内置的组件，
      它会被渲染成一个a标签

      tag ：可以设置router-link要被渲染成什么元素
      replace ：replace不会留下history记录，所以指定replace的情况下，后退、返回键不能使用
      active-class:当<router-link>对应的路由匹配成功时,会自动给当前元素设置一个router-link-active的class,设置active-class可以修改默认的名称.


      -->
    <!--    <router-link to="/home" tag="button" replace a ctive-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="input" replace>关于</router-link>-->
    <!--  占位
      <router-view>该标签会根据当前的路径，动态渲染出不同的组件
      -->
    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!--    数据传递-->
    <!--    <router-link :to="{path:'/profile',-->
    <!--    // 参数传递-->
    <!--    query:{-->
    <!--      name:'刘德樟',-->
    <!--      sex: '男',-->
    <!--      age:20-->
    <!--    }}">档案-->
    <!--    </router-link>-->

    <!--    通过按钮点击来传递数据-->
    <button @click="profileClick">档案</button>
    <h2>哈哈哈哈哈哈</h2>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'liudezhang',
    }
  },
  methods: {
    // 由代码跳转路由
    homeClick() {
      // $router 是vue源码中自带的一个属性
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    // 通过点击事件来传递数据
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: '刘德樟',
          age: 20,
          sex: '男'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  background-color: red;
  color: white;
}
</style>
