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
import <%= options.cname %> from './components/<%= options.cname %>/<%= options.cname %>.vue';
import <%= options.cname %>Panel from './components/<%= options.cname %>/<%= options.cname %>Panel.vue';
import config from './components/<%= options.cname %>/config.json';

export default {
  name: 'App',
  components: {
    <%= options.cname %>,
    <%= options.cname %>Panel,
  },
  data() {
    return {
      msg: 'Welcome to Remote Vue.js App',
      config: config.config,
    }
  },
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
  height: 100%;
}
.left {
  float: left;
  width: calc(100% - 415px);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 10px;
}
.right {
  float: right;
  padding: 12px 18px 15px 15px;
  width: 356px;
  text-align: left;
  border-left: 1px gray solid;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #c3c3c3;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
