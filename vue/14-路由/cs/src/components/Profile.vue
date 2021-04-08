<template>
  <div>
    <h2>档案标题</h2>
    <h3>params：{{ $route.params }}</h3>
    <h3>query:{{ $route.query }}</h3>
    <h4 v-for="item in $route.query">{{ item }}</h4>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>