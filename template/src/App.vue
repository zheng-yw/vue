<template>
  <div id="app">
    <div class="left">
      <Hello :msg="msg" :conf="config"/>
    </div>
    <div class="right">
      <HelloPanel :activeData="config"/>
    </div>
  </div>
</template>

<script>
import Hello from "./components/Hello/Hello.vue";
import HelloPanel from "./components/Hello/HelloPanel.vue";
import config from "./components/Hello/config.json";

export default {
  name: "App",
  components: {
    Hello,
    HelloPanel
  },
  data() {
    return {
      msg: "Welcome to Remote Vue.js App",
      config: config.config
    }
  }
};
</script>

<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
.left {
  float: left;
  width: calc(100% - 405px);
}
.right {
  float: right;
  padding: 20px;
  width: 360px;
  text-align: left;
  border-left: 1px gray solid;
  height: 100%;
}
</style>
