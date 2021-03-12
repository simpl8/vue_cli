<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
// import Users from './components/Users'
import Footer from './components/Footer'
// import Content from './components/Content'

export default {
  name: 'App',
  // data() {
  //   return {
  //     users: [
  //       {"name": "zhangsuhang", "age": 28},
  //       {"name": "guobanglu", "age": 28}
  //     ]
  //   }
  // },
  components: {
    Header,
    //Users,
    Footer,
    // Content,
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  position: fixed;
  margin-top: 65px;
  left: 0%;
  background: rgb(249, 252, 252);
  height: 100%;
  width: 100%;
}

</style>
