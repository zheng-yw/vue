<template>
  <div id="app">
    <div class="left">
      <<%= options.cname %> :msg="msg" :conf="config"/>
    </div>
    <div class="right">
      <<%= options.cname %>Panel :activeData="config"/>
    </div>
  </div>
</template>

<script>
import <%= options.cname %> from "./components/<%= options.cname %>/<%= options.cname %>.vue";
import <%= options.cname %>Panel from "./components/<%= options.cname %>/<%= options.cname %>Panel.vue";
import config from "./components/<%= options.cname %>/config.json";

export default {
  name: "App",
  components: {
    <%= options.cname %>,
    <%= options.cname %>Panel
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
