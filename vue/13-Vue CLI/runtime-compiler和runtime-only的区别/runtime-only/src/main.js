import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 比runtime-compiler性能更高，代码量更少
// runtime-only
// render -> vdom -> UI

