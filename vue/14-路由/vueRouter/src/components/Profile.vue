<template>
  <div>
    <!--    获取数据的时候使用query来获取数据-->
    <h2>我是profile组件</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.sex }}</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
