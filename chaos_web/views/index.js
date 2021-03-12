// 创建User模板
const User = {
  template:`
  <div>
    <h1>Hello!!</h1>
    <router-link to="/bookList">bookList</router-link>
    <router-link to="/foundIndex">foundIndex</router-link>
    <router-link to="/useTools">useTools</router-link>
    <router-link to="/setting">setting</router-link>
    <router-view></router-view>
  </div>
  `
}
const bookList = {
  methods: {
    // 方式一：实现route跳转编程方式跳转
    goToFoundIndex() {
      this.$router.push("foundIndex") 
    },
    // 方式二：
    goToSetting() {
      this.$router.push({
        path: "setting",
      })

    }
  },
  template:`
  <div>
  <h2>bookList</h2>
  <button @click="goToFoundIndex">书单列表</button><br>
  <button @click="goToSetting">设置</button>
  </div>
  `
}

const foundIndex = {
  template: '<div>foundIndex</div>'
}

const useTools = {
  template: '<div>useTools</div>'
}

const setting = {
  template: '<div>setting</div>'
}

// 创建router实例
const router = new VueRouter({
  routes: [
    {
      path: '/', component: User,
      // {path: "/bookList", component: bookList},
      // {path: "/foundIndex", component: foundIndex},
      // {path: "/useTools", component: useTools}
      children: [
        { path: "/bookList", component: bookList },
        { path: "/foundIndex", component: foundIndex },
        { path: "/useTools", component: useTools },
        { path: "/setting", component: setting }
      ]
    }
  ]
})


// 将router注册进app（Vue）中
new Vue({
  el: "#app",
  router,
})