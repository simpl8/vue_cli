<template>
  <div class="users">
    <h1>你的名字</h1>
    <li v-for="(user, index) in users" :key="index">{{index}}-{{ user }}</li>
    <li v-for="item in sbqusers" :key="item.index">{{ item.name }}-{{item.age}}</li>
  </div>
</template>
<script>
export default {
  props: {
    sbqusers: {
      type: Array
    }
  }, // 从父组件中取得的数据
  data() {
    return {
      users: ["张苏杭", "郭邦璐"],

    }
  }
  
}
</script>
<style type="text/css" scoped> /* scoped 属性让样式只在当前组件内生效 */
.users {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(231, 225, 225);
}
h1 {
  color: red;
  text-align: center;
}
li{
  color:coral
}
  
</style>