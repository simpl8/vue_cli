<template>
  <div class="header">
    <div class="userInfo">
      <label class="userInfo" for="userInfo">hello-@{{ userName }}</label>
      <label class="logOut" for="logOut">logOut</label>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
     userName: "simple"

    }
  }
  
}
</script>
<style type="text/css" scoped> /* scoped 属性让样式只在当前组件内生效 */
  .header {
    position: fixed;
    left: 0%;
    right: 0;
    top: 0;
    height: 20px;
    width: 100%;
    background:rgb(160, 157, 157);
    padding: 10px
  }
  .userInfo, .logOut{
    margin-right: 10px;
    color:gold;
    text-align: right;
    cursor: pointer;
  }
</style>