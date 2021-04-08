import {age, name, sex, num} from "./js/one";

// console.log(age)
// console.log(name)
// console.log(sex)
// console.log(num(20, 50));

let addBtn = require('./js/two.js')

addBtn();

// 依赖css文件
require('./css/style.css');
// 依赖less文件
require('./css/special.less');


// 使用vue进行开发
import Vue from 'vue/dist/vue.esm'


// 1.抽取
// const App = {
//
// }
// 1.导入
// import App from "./vue/app";

import App from "./vue/App.vue";

new Vue({
  el: '#app',
  // 3.使用组件
  template: '<App/>',
  // 2.注册组件
  components: {
    App
  }
})
