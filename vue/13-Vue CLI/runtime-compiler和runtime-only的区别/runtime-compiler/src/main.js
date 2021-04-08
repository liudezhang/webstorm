// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

console.log(App)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:function (createElement) {
    // return createElement('div',{class:'one'},
    //   [createElement('h1',{class:'two'},['刘德樟',
    //     createElement('button',{class:'three'},['按钮'])])])
  return createElement(App)
  }
})

// runtime-compiler
// template -> ast -> render -> vdom -> UI
