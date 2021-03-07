<template>
  <div id="app">
    <Header />
    <Users :sbqusers="users"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'

export default {
  name: 'App',
  data() {
    return {
      users: [
        {"name": "zhangsuhang", "age": 28},
        {"name": "guobanglu", "age": 28}
      ]
    }
  },
  components: {
    Header,
    Users,
    Footer
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  margin-top: 60px;
}
</style>
