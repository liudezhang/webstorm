<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户内容</p>
    <h4>{{ userId }}</h4>
    <!--  获取动态路由  -->
    <h5>{{ $route.params.userId }}</h5>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // $route 获取当前的路由中叫userId的对象
      return this.$route.params.userId
    }
  },
  methods: {
    btn() {
      console.log(this.$router)
    }
  }
}
</script>

<style scoped>

</style>
