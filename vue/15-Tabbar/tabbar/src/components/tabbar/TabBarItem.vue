<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <!--   不活跃状态显示的图片   -->
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <!--   活跃状态显示的图片   -->
      <slot name="item-icon-active"></slot>
    </div>
    <!--  添加样式  -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // link 路径，由App组件传入
    link: String,
    // 处于活跃状态下的颜色 在使用时可以传入一个activeColor属性
    activeColor: {
      type: String,
      // 默认
      default: 'deepskyblue'
    }

  },
  data() {
    return {
      // isActive: false
    }
  },
  // 计算属性
  computed: {
    // 控制 分类、首页、购物车、我的、是否处于活跃状态
    isActive() {
      /*
      *  /home -> item(/home) = true
      *  /home -> item(/category) = false
      *  /home -> item(/cart) = false
      *  /home -> item(/profile) = false
      * */
      // console.log(this.$route.path);
      // console.log(this.link);
      // console.log(this.$route.path.indexOf(this.link));
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      // 判断当前是否处于活跃状态，如果是就添加color
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    // 点击跳转路由
    itemClick() {
      // console.log('itemClick');
      // console.log(this.link);
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: deepskyblue;
}
</style>
