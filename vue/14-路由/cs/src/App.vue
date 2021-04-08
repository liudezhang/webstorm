<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/1">我的</router-link>
    <router-link :to="{
      path:'/profile',
      query:{name:'刘德樟',age:'20',sex:'男'}}">档案
    </router-link>

    <button @click="gain">档案2</button>

    <!--    <button @click="Home">首页</button>-->
    <!--    <button @click="About">关于</button>-->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    gain() {
      this.$router.push({
        path: '/profile',
        query: {name: '毕家豪', age: '100', sex: '男'}
      })
    },
    Home() {
      this.$router.push('/home');
    },
    About() {
      this.$router.push('/about');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
