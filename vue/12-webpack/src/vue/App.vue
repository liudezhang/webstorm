<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  name: "App",
  components:{
    Cpn
  },
  data() {
    return {
      title: 'Hello webpack',
      name: '刘德樟'
    }
  },
  methods: {
    btnClick() {
      alert(this.title);
    }
  }
}
</script>

<style scoped>
.title {
  color: red;
  font-family: '华文行楷';
  font-size: 80px;
}
</style>