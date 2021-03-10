<template>
  <div class="header">
    <div class="userInfo">
        <ul>
            <li class="tag">
                <a href="http://wwww.baidu.com">书单</a></li>
            <li  class="tag">工具</li>
            <li  class="tag">基金在线</li>
            <li  class="tag">学习</li>
            <li  class="tag">标签一</li>
            <li  class="tag">标签二</li>
            <li class="info" @click="logOut">logOut</li>
            <li class="info" @click="getUserInfo">hello-@{{ userName }}</li>
            
        </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
     userName: "simple"
    

    }
  },
  methods: {
      getUserInfo() {
          console.log("查看个人信息")
      },

      logOut() {
          alert("确认要退出吗")
      }
  }
  
}
</script>
<style type="text/css" scoped> /* scoped 属性让样式只在当前组件内生效 */
  .header {
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0;
    height: 50px;
    width: 100%;
    background:rgb(160, 141, 126);
  }
  .userInfo {
      top: 0%;
      text-align: right;
  }
  ul {
      height: 10px
  }
  li.info {
      display: inline;
      float: right;
      list-style-type: none;
      color: rgb(214, 236, 12);
      padding: 0px 6px 0px;
      cursor: pointer; 
  }
  li.tag {
      display: inline;
      float: left;
      list-style-type: none;
      color:rgb(231, 235, 14);
      padding: 0px 4px 0px;
      cursor: pointer; 
  }
  a {
    color: rgb(231, 235, 14);
    text-decoration: none;
  }
</style>