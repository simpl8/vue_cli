const User = {
  template:'<div>User123</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component:User }
  ]
})


new Vue({
  el: "#app",
  router,
})