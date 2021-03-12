<template>
  <div class="header">
    <div class="logo">
      <img class="go_logo" src="../assets/goo.png">
    </div>
    <div class="tool_bar">
      <router-link id="insure" class="nav_bar" to="/insure">出单</router-link>
      <router-link id="interface" class="nav_bar" to="/interface">接口</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style type="text/css" scoped> /* scoped 属性让样式只在当前组件内生效 */
  .header {
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0px;
    height: 60px;
    width: 100%;
    /*background:rgb(240, 248, 232);*/
  }
  .logo {
    position: relative;
    left: 0;
    top: 0;
    height: 34px;
    width: 100%;
    background: rgb(240, 248, 232);
  }
  .go_logo {
    position: relative;
    left: 1%
  }
  a.nav_bar {
    position: relative;
    top: 6px;
    left: 20%;
    font-family: 华文楷体;
    font-weight: 600;
    font-size: 22px;
    color: #00bdf7;
    text-decoration: none;
    padding: 10px;
    
  }
  #interface {
    color: orange
  }
 
</style>