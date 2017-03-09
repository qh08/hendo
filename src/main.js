// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 0.引入mock
require('./configs/mock.js')

// 1.引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)

// 2.引入路由插件与配置配置
import routes from './configs/router'

// 3.引入vuex配置
import model from './configs/model'

// 4.引入整体样式
import './styles/index.css'

// 5.引入字体图标
// import './assets/iconfont.css'

// 6. 设置productionTip
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter({
    routes: routes
  }),
  store: new Vuex.Store({
    modules: model
  }),
  template: '<router-view></router-view>'
})
