import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'  // 项目内router文件


Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: '<App/>'
// })