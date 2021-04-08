<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return{
      title:'webpack'
    }
  }
}
</script>

<style scoped>
h2{
  font-size: 50px;
  color: white;
}
</style>