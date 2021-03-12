import Vue from 'vue'
import Router from 'vue-router'
import Insurance from '../components/contents/Insurance'
import Interface from '../components/contents/Interface'


// 使用VueRouter
Vue.use(Router)


export default new Router({
  routes: [
    {
      // 路径
      path: '/insure',
      // 名称
      name: 'insure',
      // 跳转的组件
      component: Insurance
    },
    {
      path: '/interface',
      name: 'interface',
      component: Interface
    }
  ]
})