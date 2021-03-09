<template>
  <div class="footer">
    <label>{{ copyRight }}</label> 
  </div>
</template>
<script>
export default {
  data() {
    return {
     copyRight: "Copyright @2021 simple-owner",
    
    }
  },
  computed: {
    

  }
  
}
</script>
<style type="text/css" scoped> /* scoped 属性让样式只在当前组件内生效 */
.footer {
  position: fixed;
  left: 0%;
  bottom: 0%;
  height: 20px;
  width: 100%;
  background:dimgrey;
  padding: 2mm;
  text-align: center;
}
label {
  text-align: center;
  color: rgb(218, 207, 218);
}

</style>