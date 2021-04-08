<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news"> 新闻</router-link>
    <router-link to="/home/message"> 消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // path: '/home/news'
    }
  },
  created() {
    /*
    * 在创建出组件的时候会执行
    * */
    // console.log('create')
  },
  mounted() {
    /*
    * 在template挂载到dom时执行
    * */
    // console.log('mounted');
  },
  updated() {
    /*
    * 在页面刷新时执行
    * */
    // console.log('update')
  },
  destroyed() {
    /*
    * 在组件销毁时触发
    * */
    // console.log('destroyed')
  },
  activated() {
    // 触发时机：keep-alive组件激活时使用；
    // this.$router.push(this.path)
  },
  deactivated() {
    // 触发时机：keep-alive组件停用时调用；
  },
  // 组件内的导航守卫
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path)
    // this.path = this.$route.path
    next()
  }

}
</script>

<style scoped>

</style>
