<template>
  <div class="longInsure">
    <select name="env" :env="env">
      <option value="test">test</option>
      <option value="uat">uat</option>
    </select><br>
    <input type="text" placeholder="保通agentCode" v-model="btCode"><br>
    <input type="text" placeholder="保通姓名" v-model="btName"><br>
    <input type="text" placeholder="条款计划" v-model="plan"><br>
    <input type="text" placeholder="出单时间" v-model="orderTime"><br>
    <input class="btn" type="button" @click="longInsure" value="提交">
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      env: "test",
      btCode: '',
      btName: '', 
      plan: '',
      orderTime: ''
    }
  },
  methods: {
    longInsure() {
      console.log(this.btName)
    }
  }
}
</script>

<style scoped>
  div.longInsure {
    position: relative;
    left: 5%
  }
  input {
    border-radius: 3px;
    height: 30px;
    width: 250px;
    margin: 2mm 2mm 2mm 2mm;
    border: 1px solid #00bdf7;
  }
  input.btn {
    position: relative;
    left: -3px;
    border-radius: 3px;
    height: 30px;
    width: 100px;
    background-color: #00bdf7;
  }
  select {
    border-radius: 3px;
    height: 30px;
    widows: 100px;
    margin: 2mm 2mm 2mm 2mm;
    border: 1px solid #00bdf7
  }
</style>
